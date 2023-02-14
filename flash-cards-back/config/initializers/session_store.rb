if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_flash-cards', domain: 'flash-cards-json-api'
  else
    Rails.application.config.session_store :cookie_store, key: '_flash-cards'