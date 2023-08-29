// app-putdata component
const PutData = {
  template: `
  <!-- Updating mySQL Table With Name as Key -->
  <v-row>
  
    <v-col cols="12" md="6 " >
      <v-card
        class="mx-auto"
        max-width="90%"
        >

        <v-card-text>
          <v-form>
            <v-text-field label="Unit code" v-model="code" /></v-text-field>
            <v-text-field label="Description" v-model="desc" /></v-text-field>
            <v-numeric-input v-model="cp" :min="2.5" :max="30" :step="2.5"></vue-numeric-input>
            <label for="cp">Credit points: </label><input id="cp" type="number" min="2.5" max="30" step="2.5" v-model="cp">
            <br>

            <v-radio-group label="Type" v-model="type">
              <v-radio label="Core" value="Core"></v-radio>
              <v-radio label="Software Development" value="Software Development"></v-radio>
              <v-radio label="Systems Analysis" value="Systems Analysis"></v-radio>
            </v-radio-group>

            <v-btn
              depressed
              v-on:click="putData(code, desc, cp, type)"
              color="primary">
              Update
            </v-btn>

          </v-form>
        </v-card-text>

      </v-card>

    </v-col>

    <!-- Output -->
    <v-col cols="12" md="6">
      <v-card>
        <v-card-text>
          <p>Output Message : {{msg}}</p>
          <p>Status Code: {{statusVal}}</p>
          <p>Status: {{statusText}}</p>
          <p>Response Headers: {{headers}}</p>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>

     `,
     //variable initialization
    data: function() {
      return {
        code: '',
        desc: '',
        cp: 2.5,
        type: '',
        statusVal: '',
        statusText: '',
        headers: '',
      }
    },
    methods: {

    putData: function(cd, description, cred, tp) {

      var putSQLApiURL = 'resources/apis.php/code/' + cd;


      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: cd,
          desc: description,
          cp: cred,
          type: tp
        })
      };

		fetch(putSQLApiURL, requestOptions)
		.then( response =>{
		  //turning the response into the usable data
		  return response.json( );
		})
		.then( data =>{
		  //This is the data you wanted to get from url
		  self.msg="successful";
		})
		.catch(error => {
		  self.err=error
		});

    }

    }
  }
