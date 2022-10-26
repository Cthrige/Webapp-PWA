import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Switch } from "../components/switch";
import { Switch2 } from "../components/switch2";

export const Settings = () => {
  return (
    <div class="row gx-0 justify-content-center px-3">
      <div class="col-12 col-lg-10 col-xl-8 mx-auto">
        <h1 className="text-center mt-3">Indstillinger</h1>
        <div class="my-4">
          <hr class="my-4" />
          <h4>
            <strong class="mb-0">Notifikationer</strong>
          </h4>
          <div class="list-group mb-5 shadow">
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Jeg ønsker alle notifikationer</strong>
                  <p class="text-muted mb-0">
                    Vi vil sende dig opdateringer, tilbud og dine daglige
                    reminders
                  </p>
                </div>
                <div class="col-auto">
                  <Switch />
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Udløbenende notifikationer</strong>
                  <p class="text-muted mb-0">
                    Vi vil kun sende dig notifikationer så snart noget udløber
                    inden for 3 dage
                  </p>
                </div>
                <div class="col-auto">
                  <Switch2 />
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <h4>
            <strong class="mb-0">Design</strong>
          </h4>
          <div class="list-group mb-5 shadow">
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Tema</strong>
                  <p class="text-muted mb-0">Ændrer farver og tema</p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Sprog</strong>
                  <p class="text-muted mb-0">Ændrer appens sprog</p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <h4>
            <strong class="mb-0">Kontakt</strong>
          </h4>
          <div class="list-group mb-5 shadow">
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Feedback</strong>
                  <p class="text-muted mb-0">
                    Har du ris eller ros, så kontakt os gerne her!
                  </p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Support</strong>
                  <p class="text-muted mb-0">
                    Mangler du hjælp, så kontakt os gerne her!
                  </p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <h4>
            <strong class="mb-0">Om Monthly</strong>
          </h4>
          <div class="list-group mb-5 shadow">
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Om Monthly</strong>
                  <p class="text-muted mb-0">Hvem er vi?</p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Holdet bag Monthly</strong>
                  <p class="text-muted mb-0">Bla bla bla</p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Karriere & Jobs</strong>
                  <p class="text-muted mb-0">Ledige stillinger</p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="row align-items-center">
                <div class="col">
                  <strong class="mb-0">Mision og Vision</strong>
                  <p class="text-muted mb-0">Hvad stræber vi efter?</p>
                </div>
                <div class="col-auto">
                  <ArrowForwardIosIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
