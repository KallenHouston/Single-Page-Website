// app-postdata component
const PostData = {
  template: `
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
              v-on:click="postData(code, desc, cp, type)"
              color="primary">
              Add
            </v-btn>

          </v-form>
        </v-card-text>

      </v-card>

      </v-col >
        <!-- Output -->
          <v-col cols="12"
              md="6">
        <v-card
          class="mx-auto"
          max-width="90%"
          >
          <v-card-text>
            <p>Output Message : {{ msg }}</p>
            <p>Status Code: {{statusVal}}</p>
            <p>Status: {{statusText}}</p>
            <p>Response Headers: {{headers}}</p>
          </v-card-text>
        </v-card>
      </v-col>
</v-row>

   `,
  data: function() {
    return {
      code: '',
      desc: '',
      cp: 2.5,
      type: '',
      msg: '',
      imgVar: '',
      statusVal: '',
      statusText: '',
      headers: '',
      savingSuccessful: false
    }
  },
  methods: {

    postData: function(cd, description, cred, tp) {
      //define url for api
      var postSQLApiURL = 'resources/apis.php/'

      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'POST',
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

       
		
		fetch(postSQLApiURL, requestOptions)
		.then( response =>{
		  //turning the response into the usable data
		  return response.json( );
		})
		.then( data =>{
		  //This is the data you wanted to get from url
		   self.msg = "Data Inserted Successfully."  ;
		})
		.catch(error => {
		   self.msg = 'There was an error!' + error;
		});	
	
		
		
    }

  }
};
