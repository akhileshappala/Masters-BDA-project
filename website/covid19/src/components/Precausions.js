import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Margin } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function Precaustions() {
  return (
    <div class="precausions ">

      <div class="pre-do col-6" >
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Do's
            </Typography>
            <Typography variant="body2">
              <ol>
                <li class="list-pre">Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</li>
                <hr />
                <li>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</li>
                <hr />
                <li>Wear a mask when you are out of your house</li>
                <hr />
                <li>Stay at least 6 feet away from people when you go out</li>
                <hr />
                <li>If you feel sick stay home</li>
                <hr />
                <li>If you feel really sick call or email your doctor to ask if you should come in to the hospital</li>
                <hr />
                <li>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</li>

              </ol>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div class="col-6 pre-do"  >
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Dont's
            </Typography>
            <Typography variant="body2">
              <ol>
                <li >Take medicine that you haven’t been prescribed</li>
                <hr />
                <li>Drink or otherwise ingest bleach or other household cleaning products; they will make you very sick!</li>
                <hr />
                <li>Visit friends and family members in person</li>
                <hr />
                <li>Go to crowded locations like parks or beaches</li>
                <hr />
                <li>If you feel sick stay home</li>
                <hr />

              </ol>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div class="symptoms">
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Symptoms
            </Typography>

            <Typography variant="body2">
              People may be sick with the virus for 1 to 14
              days before developing symptoms.
              The most common symptoms of coronavirus
              disease (COVID-19) are fever, tiredness,
              and dry cough. Most people (about 80%)
              recover from the disease without needing
              special treatment. More rarely,
              the disease can be serious and even fatal. 
              Older people, and people with other medical 
              conditions (such as asthma, diabetes, or 
              heart disease), may be more vulnerable to 
              becoming severely ill.
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Most people may have a symptoms with 
        </Typography>
            <Typography variant="body2">
              <ol>
                <li >cough</li>

                <li>Fever</li>

                <li>Tiredness</li>

                <li> difficulty breathing (severe cases)</li>


              </ol>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>

  );
}

export default memo(Precaustions);

// Wash your hands several times a day for at least 20 seconds, especially before and after going out of your house
// Cover your mouth and nose with your elbow when you cough or sneeze
// Wear a mask when you are out of your house
// Stay at least 6 feet away from people when you go out
// If you feel sick stay home
// If you feel really sick call or email your doctor to ask if you should come in to the hospital
// Continue taking all of the medicine that you have been prescribed just as you did before the pandemic unless your doctor tells you to stop

