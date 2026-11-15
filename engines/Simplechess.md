# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3208<sub>(+84) | 3470<sub>(+81) | 3513<sub>(+39) |  |
| 3.6.0 | 2026-10-19 | 3124 | 3389 | 3474 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3206<sub>(+58) | 3401<sub>(+17) | 3452<sub>(+23) |  |
| 3.6.0 | 2026-10-19 | 3148 | 3384 | 3429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3148 | 3384 | 3429 |  |
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

Generated: 2026-11-15 05:42:50

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3124, 3208]
  line "E1: LTC (60.0+0.60s)" [3389, 3470]
  line "E1: VLTC (2m24s+1.12s)" [3474, 3513]
  line "P1: STC (8.0+0.08s)" [3148, 3206]
  line "P1: LTC (60.0+0.60s)" [3384, 3401]
  line "P1: VLTC (2m24s+1.12s)" [3429, 3452]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3452 | 45 | 120 | 50% | 3449 | 74% |
|  |  | E1 | 3513 | 34 | 208 | 50% | 3509 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3401 | 38 | 172 | 47% | 3424 | 72% |
|  |  | E1 | 3470 | 31 | 260 | 50% | 3467 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3206 | 36 | 202 | 48% | 3221 | 65% |
|  |  | E1 | 3208 | 28 | 356 | 52% | 3195 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3474 | 31 | 280 | 54% | 3397 | 64% |
|  |  | P1 | 3429 | 40 | 172 | 59% | 3313 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3389 | 29 | 338 | 52% | 3316 | 53% |
|  |  | P1 | 3384 | 38 | 200 | 58% | 3239 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3148 | 37 | 244 | 57% | 2942 | 42% |
|  |  | E1 | 3124 | 32 | 330 | 56% | 2936 | 42% |