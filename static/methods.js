const {Lotus} = require("lotus-typescript/dist/lotus-methods");
const API_KEY = "lIPgfucY.oQmJET2bWj1rVfC960Iu8FwESKmC3xW5"
const subscription_id = 'subs_91242632-531c-46ab-a411-dee10b5c9bf5'
const date = '2022-11-10T22:57:14.089675Z';
const plan_id = 'plan_f6b484d3-db5c-4095-9c9f-4f93fbfcdbf9';
const customerId = '1d23'

const lotus = new Lotus(API_KEY, {
    host: 'https://api.uselotus.io/', // You can omit this line if using Lotus Cloud
    flushAT: 1,
})

export function  trackEvent  ()  {
    const data = [
        {
            eventName: 'validator_nodes_count_delta',
            customerId: 'c25d9e77-edf6-4e25-b57c-12475065d8ee',
            timeCreated: '2022-11-24T04:35:47.917Z',
            idempotencyId: 'e41a3b23-8989-4d97-8d03-c213eeda57fe',
            properties: {delta: 1, shard_id: 'vuki-calimero-testnet'}
        }
    ]
    try {
        const res = lotus.trackEvent({batch: data}, (data) => {
            console.log(data)
        })
    } catch (error) {
        console.log(error)
    }
    return lotus.queue
}

const getCustomers = async () => {
    console.log("Calling Get customers")
    try {
        await lotus.getCustomers().then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const getCustomerDetails = async () => {
    console.log("Calling Get customer Details")
    try {
        await lotus.getCustomerDetail({customerId: '23432'}).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const createCustomer = async () => {
    console.log("Calling create customer")
    try {
        await lotus.createCustomer({customerId: '1d23', email: "testing@gmail.com"}).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const createCustomersBatch = async () => {
    console.log("Calling create customers Batch")
    const customers = [
        {customerId: '2d23', email: "1testing@gmail.com"},
        {customerId: '3d23', email: "2testing@gmail.com"},
        {customerId: '4d23', email: "4testing@gmail.com"},
        {customerId: '5d23', email: "5testing@gmail.com"},
    ]
    try {
        await lotus.createCustomersBatch({
            customers: customers,
            behaviorOnExisting: "overwrite"
        }).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const getAllPlans = async () => {
    console.log("Calling get ALL Plans")
    try {
        return await lotus.getAllPlans()
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const createSubscription = async () => {
    console.log("Calling create subscription")
    const date = '2022-11-10T22:57:14.089675Z';
    const plan_id = 'plan_f6b484d3-db5c-4095-9c9f-4f93fbfcdbf9';
    const customerId = '1d23'
    try {
        await lotus.createSubscription({customerId, planId: plan_id, startDate: date}).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const getAllSubscriptions = async () => {
    console.log("Calling get all subscriptions")
    try {
        await lotus.getAllSubscriptions().then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const getSubscriptionDetails = async () => {
    console.log("Calling get subscription Details")
    try {
        await lotus.getSubscriptionDetails({subscriptionId: subscription_id}).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const cancelSubscription = async () => {
    console.log("Calling Cancel subscription")
    const data = {
        subscriptionId: subscription_id,
        planId: plan_id,
        turnOffAutoRenew:true
    }
    try {
        await lotus.cancelSubscription(data).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const getCustomerAccess = async () => {
    console.log("Calling get Customer Access")
    try {
        await lotus.getCustomerAccess({
            customerId: customerId,
            featureName: "feature 1"
        }).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}

const changeSubscription = async () => {
    console.log("Calling change subscription")
    const data = {
        subscriptionId: subscription_id,
        planId: plan_id,
        replaceImmediatelyType:"change_subscription_plan"
    }
    try {
        await lotus.changeSubscription(data).then(data => console.log(data))
    } catch (error) {
        console.log(error)
    }
    console.log("----------------")
}
