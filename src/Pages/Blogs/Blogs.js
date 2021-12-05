import React from 'react';
import blog1 from '../../Images/blogs1.jpg'

const Blogs = () => {
    return (
        <div id="blogs">
            <h2 className="text-start p-4" style={{ fontFamily: "Kaushan Script, cursive" }}>latest Blogs</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div class="card h-100">
                        <img src={blog1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Comming Soon..</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <div class="card h-100">
                        <img src={blog1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Comming Soon..</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div class="card h-100">
                        <img src={blog1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Comming Soon..</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;