# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3152<sub>(+32) | 3355<sub>(+52) | 3414<sub>(+42) |  |
| 5.0.0 | 2026-02-13 | 3120<sub>(+61) | 3303<sub>(+43) | 3372<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3059<sub>(+93) | 3260<sub>(+63) | 3283<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2966<sub>(+new) | 3197<sub>(+new) | 3233<sub>(+new) |  |
| 2.0.0 | 2025-09-14 |  |  |  |  |
| 1.0.0 | 2025-08-26 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Minke+<version>&body=###%20Engine%20name%0AMinke%0A%0A###%20Version%0A6.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-21 06:26:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2966, 3059, 3120, 3152]
  line "STC (8.0+0.08s)" [2966, 3059, 3120, 3152]
  line "LTC (60.0+0.60s)" [3197, 3260, 3303, 3355]
  line "VLTC (2m24s+1.12s)" [3233, 3283, 3372, 3414]
  line "VLTC (2m24s+1.12s)" [3233, 3283, 3372, 3414]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3414 | 27 | 338 | 50% | 3414 | 78% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3355 | 28 | 326 | 50% | 3353 | 70% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3152 | 30 | 306 | 50% | 3152 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3372 | 24 | 414 | 50% | 3372 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3303 | 26 | 382 | 51% | 3295 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3120 | 25 | 444 | 51% | 3116 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3283 | 30 | 276 | 51% | 3274 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3260 | 31 | 268 | 48% | 3274 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3059 | 33 | 252 | 51% | 3032 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3233 | 37 | 184 | 50% | 3235 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3197 | 32 | 252 | 48% | 3213 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2966 | 34 | 240 | 48% | 2978 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |