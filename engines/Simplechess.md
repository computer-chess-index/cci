# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3205<sub>(+86) | 3467<sub>(+83) | 3511<sub>(+40) |  |
| 3.6.0 | 2026-10-19 | 3119 | 3384 | 3471 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3218<sub>(+60) | 3410<sub>(+16) | 3461<sub>(+23) |  |
| 3.6.0 | 2026-10-19 | 3158 | 3394 | 3438 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3158 | 3394 | 3438 |  |
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

Generated: 2026-11-14 05:42:30

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3119, 3205]
  line "E1: LTC (60.0+0.60s)" [3384, 3467]
  line "E1: VLTC (2m24s+1.12s)" [3471, 3511]
  line "P1: STC (8.0+0.08s)" [3158, 3218]
  line "P1: LTC (60.0+0.60s)" [3394, 3410]
  line "P1: VLTC (2m24s+1.12s)" [3438, 3461]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3461 | 45 | 120 | 50% | 3459 | 74% |
|  |  | E1 | 3511 | 35 | 200 | 51% | 3506 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3410 | 38 | 172 | 47% | 3433 | 72% |
|  |  | E1 | 3467 | 31 | 260 | 50% | 3464 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3218 | 36 | 194 | 49% | 3225 | 65% |
|  |  | E1 | 3205 | 28 | 356 | 52% | 3193 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3438 | 40 | 172 | 59% | 3321 | 68% |
|  |  | E1 | 3471 | 31 | 280 | 54% | 3394 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3394 | 38 | 200 | 58% | 3247 | 63% |
|  |  | E1 | 3384 | 29 | 338 | 52% | 3313 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3158 | 37 | 244 | 57% | 2950 | 42% |
|  |  | E1 | 3119 | 32 | 326 | 56% | 2934 | 42% |