# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3294<sub>(+89) | 3560<sub>(+81) | 3605<sub>(+42) |  |
| 3.6.0 | 2026-10-19 | 3205 | 3479 | 3563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3414<sub>(+61) | 3605<sub>(+17) | 3656<sub>(+24) |  |
| 3.6.0 | 2026-10-19 | 3353 | 3588 | 3632 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3353 | 3588 | 3632 |  |
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

Generated: 2026-11-11 05:42:37

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3205, 3294]
  line "E1: LTC (60.0+0.60s)" [3479, 3560]
  line "E1: VLTC (2m24s+1.12s)" [3563, 3605]
  line "P1: STC (8.0+0.08s)" [3353, 3414]
  line "P1: LTC (60.0+0.60s)" [3588, 3605]
  line "P1: VLTC (2m24s+1.12s)" [3632, 3656]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3656 | 46 | 116 | 50% | 3653 | 73% |
|  |  | E1 | 3605 | 36 | 192 | 51% | 3599 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3605 | 38 | 172 | 47% | 3626 | 72% |
|  |  | E1 | 3560 | 32 | 252 | 50% | 3559 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3414 | 37 | 190 | 49% | 3420 | 66% |
|  |  | E1 | 3294 | 28 | 344 | 52% | 3276 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3632 | 40 | 172 | 59% | 3513 | 68% |
|  |  | E1 | 3563 | 32 | 276 | 54% | 3484 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3588 | 38 | 200 | 58% | 3434 | 63% |
|  |  | E1 | 3479 | 30 | 326 | 53% | 3401 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3353 | 37 | 244 | 57% | 3125 | 42% |
|  |  | E1 | 3205 | 33 | 298 | 57% | 3013 | 42% |