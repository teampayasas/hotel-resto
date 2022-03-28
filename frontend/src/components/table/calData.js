function CalData() {
    const dataset = []
    const url = 'https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData';

    const response = await fetch(url);
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
        let mongoDB = data[i];
        // this.setState({UserData: mongoDB});
        dataset.push(mongoDB);
    }
}
export default CalData;