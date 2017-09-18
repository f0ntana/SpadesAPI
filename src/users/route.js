'use strict'

let Joi = require('joi')
let handler = require('./handler')


module.exports = [
  {
    method: 'POST',
    path: '/api/v1/users',
    handler: handler.create,
    config: {
      validate: {
        payload: Joi.object({
          user: Joi.string().required(),
          password: Joi.string().required(),
          email : Joi.string().email().required()
        })
      }
    }
  }
]
