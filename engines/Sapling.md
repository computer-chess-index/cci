# Engine: Sapling

Author: Timothy Jones

Home: https://github.com/Timmoth/Sapling

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3070<sub>(+32) | 3310<sub>(-4) | 3406<sub>(+16) |  |
| 2.0.0 | 2026-10-21 | 3038 | 3314 | 3390 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-10-31 | 3074<sub>(+62) | 3276<sub>(-23) | 3359<sub>(+16) |  |
| 2.0.0 | 2026-10-21 | 3012 | 3299 | 3343 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-21 | 3012 | 3299 | 3343 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sapling+<version>&body=###%20Engine%20name%0ASapling%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:42:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.0", "2.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3038, 3070]
  line "E1: LTC (60.0+0.60s)" [3314, 3310]
  line "E1: VLTC (2m24s+1.12s)" [3390, 3406]
  line "P1: STC (8.0+0.08s)" [3012, 3074]
  line "P1: LTC (60.0+0.60s)" [3299, 3276]
  line "P1: VLTC (2m24s+1.12s)" [3343, 3359]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3359 | 39 | 160 | 49% | 3367 | 74% |
|  |  | E1 | 3406 | 28 | 312 | 50% | 3409 | 74% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3276 | 33 | 248 | 52% | 3263 | 60% |
|  |  | E1 | 3310 | 27 | 362 | 48% | 3326 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3074 | 37 | 194 | 53% | 3055 | 61% |
|  |  | E1 | 3070 | 31 | 292 | 52% | 3056 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3343 | 38 | 254 | 67% | 2709 | 47% |
|  |  | E1 | 3390 | 31 | 340 | 62% | 2997 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3299 | 40 | 230 | 69% | 2641 | 46% |
|  |  | E1 | 3314 | 27 | 412 | 61% | 3002 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3012 | 40 | 240 | 66% | 2479 | 40% |
|  |  | E1 | 3038 | 34 | 294 | 57% | 2753 | 43% |