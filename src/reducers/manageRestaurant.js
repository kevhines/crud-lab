import cuid from 'cuid';

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

    switch (action.type) {

    case 'ADD_RESTAURANT':
        let newRestaurant = {text: action.text, id: cuid()}
        return {...state, restaurants: [...state.restaurants, newRestaurant]}
    
    
    case 'DEL_RESTAURANT':
        let restaurants = state.restaurants.filter(element => element.id !== action.id)
        return {...state, restaurants}
  
        
    case 'ADD_REVIEW':
// debugger
        const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
        return { ...state,
            reviews: [...state.reviews, review]
        }
      
    case 'DEL_REVIEW':
        const reviews = state.reviews.filter(review => review.id !== action.id);
        return {...state, reviews }
      
    default: 
        return state


    }

}
