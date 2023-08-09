import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryPage = ({ countries }) => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const country = countries.find(
    (country) => country.name.common === countryName
  );
  const {
    name,
    population,
    capital,
    currencies,
    subregion,
    region,
    tld,
    languages,
    flags,
    borders,
  } = country;

  const languageNames = Object.values(languages);
  const currencyValues = Object.values(currencies);
  const countryBorders = borders
    ? borders.map((border) => {
        const borderCountry = countries.find(
          (country) => country.cca3 === border
        );
        return borderCountry ? borderCountry.name.common : border;
      })
    : [];
  return (
    <>
      <div className="back" onClick={() => navigate("/")}>
        <div className="prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div>Back to Home</div>
      </div>
      <div className="countryData">
        <div className="flag-img">
          <img src={flags.png} alt={name.common}></img>
        </div>
        <div className="countryDetails">
          <h2>{name.common}</h2>
          <div className="details-flex">
            <div className="col1">
              <div>
                Native Name: <span>{name.official}</span>
              </div>
              <div>
                Population: <span>{population}</span>
              </div>
              <div>
                Region: <span>{region}</span>
              </div>
              <div>
                Sub Region: <span>{subregion}</span>
              </div>
              <div>
                Capital: <span>{capital}</span>
              </div>
            </div>
            <div className="col2">
              <div>
                Top Level Domain: <span>{tld}</span>
              </div>
              <div>
                Currencies:{" "}
                <>
                  {currencyValues.map((currency, index) => (
                    <span key={index}>{currency.name}</span>
                  ))}
                </>
              </div>

              <div>
                Languages: <span>{languageNames.join(", ")}</span>
              </div>
            </div>
          </div>
          <div className="border-container">
            <div>Border Countries: </div>
            <div className="country-borders">
              {countryBorders.map((name, index) => (
                <div
                  key={index}
                  className="border"
                  onClick={() => navigate(`/Country/${name}`)}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
