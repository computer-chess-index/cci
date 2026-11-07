# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3308<sub>(+99) | 3552<sub>(+70) | 3609<sub>(+44) |  |
| 3.6.0 | 2026-10-19 | 3209 | 3482 | 3565 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3459<sub>(+58) | 3650<sub>(+16) | 3706<sub>(+26) |  |
| 3.6.0 | 2026-10-19 | 3401 | 3634 | 3680 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3401 | 3634 | 3680 |  |
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

Generated: 2026-11-07 05:42:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3200 --> 3800
  line "E1: STC (8.0+0.08s)" [3209, 3308]
  line "E1: LTC (60.0+0.60s)" [3482, 3552]
  line "E1: VLTC (2m24s+1.12s)" [3565, 3609]
  line "P1: STC (8.0+0.08s)" [3401, 3459]
  line "P1: LTC (60.0+0.60s)" [3634, 3650]
  line "P1: VLTC (2m24s+1.12s)" [3680, 3706]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3706 | 54 | 84 | 51% | 3699 | 74% |
|  |  | E1 | 3609 | 38 | 168 | 50% | 3605 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3650 | 45 | 122 | 45% | 3686 | 71% |
|  |  | E1 | 3552 | 39 | 172 | 49% | 3559 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3459 | 39 | 170 | 49% | 3465 | 65% |
|  |  | E1 | 3308 | 33 | 254 | 55% | 3267 | 54% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3565 | 32 | 276 | 54% | 3486 | 63% |
|  |  | P1 | 3680 | 40 | 172 | 59% | 3561 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3482 | 30 | 326 | 53% | 3403 | 53% |
|  |  | P1 | 3634 | 38 | 200 | 58% | 3480 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3209 | 33 | 298 | 57% | 3016 | 42% |
|  |  | P1 | 3401 | 37 | 244 | 57% | 3173 | 42% |