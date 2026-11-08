# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3278<sub>(+91) | 3530<sub>(+70) | 3587<sub>(+43) |  |
| 3.6.0 | 2026-10-19 | 3187 | 3460 | 3544 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3410<sub>(+59) | 3607<sub>(+21) | 3659<sub>(+27) |  |
| 3.6.0 | 2026-10-19 | 3351 | 3586 | 3632 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3351 | 3586 | 3632 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Simplechess+<version>&body=###%20Engine%20name%0ASimplechess%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-08 05:42:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3187, 3278]
  line "E1: LTC (60.0+0.60s)" [3460, 3530]
  line "E1: VLTC (2m24s+1.12s)" [3544, 3587]
  line "P1: STC (8.0+0.08s)" [3351, 3410]
  line "P1: LTC (60.0+0.60s)" [3586, 3607]
  line "P1: VLTC (2m24s+1.12s)" [3632, 3659]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3659 | 48 | 104 | 51% | 3653 | 73% |
|  |  | E1 | 3587 | 38 | 168 | 50% | 3584 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3607 | 43 | 132 | 47% | 3634 | 72% |
|  |  | E1 | 3530 | 37 | 188 | 49% | 3537 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3410 | 38 | 182 | 49% | 3417 | 65% |
|  |  | E1 | 3278 | 29 | 322 | 53% | 3255 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3544 | 32 | 276 | 54% | 3464 | 63% |
|  |  | P1 | 3632 | 40 | 172 | 59% | 3513 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3460 | 30 | 326 | 53% | 3382 | 53% |
|  |  | P1 | 3586 | 38 | 200 | 58% | 3432 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3351 | 37 | 244 | 57% | 3124 | 42% |
|  |  | E1 | 3187 | 33 | 298 | 57% | 2996 | 42% |