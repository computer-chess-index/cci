# Engine: Minke

Author: Eduardo Marinho

Home: https://github.com/enfmarinho/Minke

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.0.0 | 2026-04-25 | 3151<sub>(+23) | 3364<sub>(+52) | 3424<sub>(+42) |  |
| 5.0.0 | 2026-02-13 | 3128<sub>(+62) | 3312<sub>(+44) | 3382<sub>(+89) |  |
| 4.0.0 | 2025-12-29 | 3066<sub>(+93) | 3268<sub>(+63) | 3293<sub>(+50) |  |
| 3.0.0 | 2025-10-20 | 2973 | 3205 | 3243 |  |
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

Generated: 2026-08-21 06:27:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.0.0", "4.0.0", "5.0.0", "6.0.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "STC (8.0+0.08s)" [2973, 3066, 3128, 3151]
  line "STC (8.0+0.08s)" [2973, 3066, 3128, 3151]
  line "LTC (60.0+0.60s)" [3205, 3268, 3312, 3364]
  line "VLTC (2m24s+1.12s)" [3243, 3293, 3382, 3424]
  line "VLTC (2m24s+1.12s)" [3243, 3293, 3382, 3424]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3424 | 23 | 442 | 50% | 3425 | 77% |
| 6.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3364 | 24 | 432 | 50% | 3364 | 71% |
| 6.0.0 | STC <sub>(8.0+0.08s)</sub> | 3151 | 27 | 382 | 49% | 3160 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3382 | 24 | 414 | 50% | 3382 | 73% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3312 | 26 | 382 | 51% | 3305 | 69% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 25 | 444 | 51% | 3124 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3293 | 30 | 276 | 51% | 3283 | 68% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3268 | 31 | 268 | 48% | 3283 | 68% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 3066 | 33 | 252 | 51% | 3038 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 37 | 184 | 50% | 3243 | 70% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3205 | 32 | 252 | 48% | 3220 | 63% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2973 | 34 | 240 | 48% | 2985 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |