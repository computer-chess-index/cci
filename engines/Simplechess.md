# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3212<sub>(+85) | 3479<sub>(+82) | 3519<sub>(+39) |  |
| 3.6.0 | 2026-10-19 | 3127 | 3397 | 3480 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3212<sub>(+56) | 3407<sub>(+21) | 3459<sub>(+22) |  |
| 3.6.0 | 2026-10-19 | 3156 | 3386 | 3437 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3156 | 3386 | 3437 |  |
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

Generated: 2026-11-18 05:43:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "E1: STC (8.0+0.08s)" [3127, 3212]
  line "E1: LTC (60.0+0.60s)" [3397, 3479]
  line "E1: VLTC (2m24s+1.12s)" [3480, 3519]
  line "P1: STC (8.0+0.08s)" [3156, 3212]
  line "P1: LTC (60.0+0.60s)" [3386, 3407]
  line "P1: VLTC (2m24s+1.12s)" [3437, 3459]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3459 | 44 | 124 | 50% | 3460 | 74% |
|  |  | E1 | 3519 | 34 | 208 | 50% | 3514 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3407 | 38 | 172 | 47% | 3429 | 72% |
|  |  | E1 | 3479 | 31 | 272 | 51% | 3475 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3212 | 34 | 218 | 48% | 3229 | 66% |
|  |  | E1 | 3212 | 28 | 364 | 51% | 3201 | 55% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3437 | 39 | 176 | 59% | 3324 | 68% |
|  |  | E1 | 3480 | 31 | 292 | 54% | 3405 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3386 | 37 | 204 | 57% | 3249 | 62% |
|  |  | E1 | 3397 | 28 | 362 | 52% | 3325 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3156 | 37 | 248 | 57% | 2952 | 42% |
|  |  | E1 | 3127 | 31 | 340 | 56% | 2946 | 43% |