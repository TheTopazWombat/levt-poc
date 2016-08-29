angular.module('app')
    .service('mainServ', mainServ);

function mainServ($http, $q, $state, ngDialog) {
    this.getCustomerById = function(id) {
        return $http({
            method: 'GET',
            url: '/customers/' + id
        });
    };

    this.getAllProducts = () => {
        return $http({
            method: 'GET',
            url: '/products'
        }).then(function(response) {
            return response.data;
        });
    };
    this.isTech = () => {
      return $http.get('/api/isTech');
    };
    this.isAuthed = () => {
        // let deferred = $q.defer();
        return $http.get('/api/isAuthed');

        // .then(function(user) {
        //     let type = user.data;
        //     console.log(type);
        //     if (!type) {
        //         deferred.reject('Not Logged In');
        //     } else if (type == 'customer') {
        //         console.log('dont let me in');
        //         deferred.reject('Not Authorized');
        //     } else {
        //         deferred.resolve();
        //     }
        //     return deferred.promise;
        // });
    };

    this.redirect = (state) => {
        $state.go(state);
    };
    this.authErrorModal = (mainCtrl) => {
      console.log('Wondermodalpowers: Activate');
      ngDialog.open({
        template: '',
        controller: 'mainCtrl',
      });
    };

    this.portfolioList = [
      {
        img: './assets/images/bike_1.jpg',
        title_text: 'MotoTec T-700',
        logo: 'bike',
      },
      {
        img: './assets/images/hoverboard.jpg',
        title_text: 'Hoverboard',
        logo: 'scooter',
      },
      {
        img: './assets/images/hoverboard_2.jpeg',
        title_text: 'Hoverboard',
        logo: 'scooter',
      },
      {
        img: './assets/images/hoverboard_3.jpg',
        title_text: 'Hoverboard',
        logo: 'scooter',
      },
      {
        img: './assets/images/izip_1.jpg',
        title_text: 'Izip E-Bicycle',
        logo: 'bike',
      },
      {
        img: './assets/images/izip_2.jpg',
        title_text: 'Izip E-Bicycle',
        logo: 'bike',
      },
      {
        img: './assets/images/izip_3.jpg',
        title_text: 'Izip E-Bicycle',
        logo: 'bike',
      },
      {
        img: './assets/images/izip_4.jpg',
        title_text: 'Izip E-Bicycle',
        logo: 'bike',
      },
      {
        img: './assets/images/kt_audi_tt.jpg',
        title_text: 'KT Audi TT',
        logo: 'car',
      },
      {
        img: './assets/images/kt_audi_r8.jpg',
        title_text: 'KT Audi R8',
        logo: 'car',
      },
      {
        img: './assets/images/kt_dodge_pc.jpg',
        title_text: 'KT Audi R8',
        logo: 'car',
      },
      {
        img: './assets/images/kt_merc_55.jpg',
        title_text: 'KT Audi R8',
        logo: 'car',
      },
      {
        img: './assets/images/4wheeler.png',
        title_text: 'KT Audi R8',
        logo: 'scooter',
      },
      {
        img: './assets/images/kt_mini.jpg',
        title_text: 'KT Audi R8',
        logo: 'car',
      },
      {
        img: './assets/images/joe_fly.png',
        title_text: 'KT Audi R8',
        logo: 'bike',
      },
      {
        img: './assets/images/kt_viper_blue.jpg',
        title_text: 'KT Audi R8',
        logo: 'car',
      },
      {
        img: './assets/images/pw_escalade.jpg',
        title_text: 'KT Audi R8',
        logo: 'car',
      },
      {
        img: './assets/images/igo_bike.png',
        title_text: 'KT Audi R8',
        logo: 'bike',
      },
      {
        img: './assets/images/tidalforce_1.png',
        title_text: 'KT Audi R8',
        logo: 'bike',
      },
      {
        img: './assets/images/pw_porche.jpg',
        title_text: 'KT Audi R8',
        logo: 'car',
      },
      {
        img: './assets/images/razor_300.png',
        title_text: 'Razor E300',
        logo: 'scooter',
      },
      {
        img: './assets/images/razor_scooter.png',
        title_text: 'Razor E300',
        logo: 'scooter',
      },
      {
        img: './assets/images/razor_300_3.jpg',
        title_text: 'Razor E300',
        logo: 'scooter',
      },
      {
        img: './assets/images/scooter_1.jpg',
        title_text: 'Mototec R950',
        logo: 'bike',
      },
      {
        img: './assets/images/peg_tractor.png',
        title_text: 'Mototec R950',
        logo: 'car',
      },
      {
        img: './assets/images/dune_racer.png',
        title_text: 'Mototec R950',
        logo: 'car',
      },
      {
        img: './assets/images/crazy_cart.png',
        title_text: 'Mototec R950',
        logo: 'scooter',
      },
      {
        img: './assets/images/army_scooter.jpg',
        title_text: 'Mototec R950',
        logo: 'scooter',
      },
    ];

}
