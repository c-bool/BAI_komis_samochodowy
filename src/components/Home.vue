<template>
<div class="page">
<div>
    <h1>Global office locations</h1>
    <table class="table">
      <thead>
        <tr>
          <td><b>City | Street</b></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cityStreet" :key="item.id">
          <td>{{ item.city }} | {{ item.street }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="../assets/cars.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Quality Cars</h5>
      <p class="card-text">Our professional staff is committed to making your car buying journey nothing short of spectacular, we have a massive selection of reliable used cars, trucks and SUVs waiting for you in our used vehicle inventory!</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../assets/finance.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Guaranteed Prices</h5>
      <p class="card-text">Our used car sales system is made simple for all parties involved, and we cater to your financial needs with the AutoNation One Price which guarantees a single low-quote price that makes for affordable monthly payments. </p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../assets/prices.jpg"  alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Turn Your Car Into Cash</h5>
      <p class="card-text">Do you have an old car or SUV you want to trade in or sell for cash? Use your money as a down payment on your next used car purchase, or benefit when receiving top dollar for your old car and invest in something else!</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div id="1" class="col-sm">
      +30 Brands
    </div>
    <div  id="2" class="col-sm">
      +200 Pre-Owned Vehicles
    </div>
    <div  id="3" class="col-sm">
      10 Locations
    </div>
  </div>
</div>

<div class="row no-gutters">
  <div class="col-12 col-sm-6 col-md-8"><img class="card-img-top" src="../assets/cars2.jpg"  alt="Card image cap"></div>
  <div class="col-6 col-md-4">
      <p>
      Welcome and thank you for visiting Car Dealer during your used car search. Our professional staff is committed to making your car buying journey nothing short of spectacular, and if you're a used car buyer in Texas, Nevada, or Arizona, we have a massive selection of reliable used cars, trucks and SUVs waiting for you in our used vehicle inventory!

If the time is right now for you to consider finding an affordable, low mileage car, truck, minivan, or SUV, we welcome all drivers and car seekers to our AutoNation USA dealerships across the southwest. Here's what to expect when shopping alongside one of our many knowledgeable sales assistants.
</p>
<p>
We'll Direct you toward the vehicles that interest you most!
When you browse our used car lots with our sales team members, you will be shown like-new pre-owned vehicles, and our knowledgeable staff members will walk you through the important details of each car. Do you want to learn every aspect of your next used car? We have all the specs and engine capabilities you could ask for, and before your test drive we'll give you the full rundown!
</p>
<p>
Whatever your driving personality is, or the type of car design you're after, our affordable used vehicles provide a diverse lineup of compact and midsize sedans, crossovers, pickup trucks, and SUVs that the whole family can enjoy!
</p>
</div>
</div>


 <img class="opinie" src="../assets/opinie.jpg"  alt="Card image cap">

</div>
</template>
<script>
export default {
  props: {
    cityStreet: {
      type: undefined,
      required: true,
    },
  },
};
</script>
<style scoped>
.col-sm {
    flex: 1 0 0%;
    background-color: #000;
    color: #fff;
    padding: 40px;
    font-size: 40px;
    width: 100%;
    text-align: center;
}
.container {
    max-width: 100%;
}
.row {
    margin-top: 60px;
}
.card-group {
    margin-top: 30px;
}
.row.no-gutters {
    margin-top: 60px;
    padding: 30px;
}
img.opinie {
    margin-left: 25%;
    margin-right: 25%;
}
</style>