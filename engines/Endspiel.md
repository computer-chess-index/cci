# Engine: Endspiel

Author: Thilo Horstmann

Home: https://github.com/thilo11/endspiel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-12 | 3006<sub>(-29) | 3351<sub>(+31) | 3384<sub>(-27) |  |
| 2.2.0 | 2026-10-30 | 3035 | 3320 | 3411 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-12 | 3051<sub>(-62) | 3328<sub>(+2) | 3363<sub>(0) |  |
| 2.2.0 | 2026-10-30 | 3113 | 3326 | 3363 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-10-30 | 3113 | 3326 | 3363 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Endspiel+<version>&body=###%20Engine%20name%0AEndspiel%0A%0A###%20Version%0A2.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:38:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2.0", "2.3.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3035, 3006]
  line "E1: LTC (60.0+0.60s)" [3320, 3351]
  line "E1: VLTC (2m24s+1.12s)" [3411, 3384]
  line "P1: STC (8.0+0.08s)" [3113, 3051]
  line "P1: LTC (60.0+0.60s)" [3326, 3328]
  line "P1: VLTC (2m24s+1.12s)" [3363, 3363]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3363 | 46 | 136 | 58% | 3175 | 61% |
|  |  | E1 | 3384 | 39 | 184 | 55% | 3302 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3328 | 52 | 104 | 58% | 3152 | 59% |
|  |  | E1 | 3351 | 36 | 208 | 55% | 3289 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3051 | 39 | 202 | 57% | 2974 | 47% |
|  |  | E1 | 3006 | 38 | 212 | 50% | 3000 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3363 | 155 | 8 | 50% | 3363 | 100% |
|  |  | E1 | 3411 | 42 | 140 | 50% | 3410 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3326 | 208 | 4 | 50% | 3326 | 100% |
|  |  | E1 | 3320 | 41 | 156 | 49% | 3324 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3113 | 87 | 36 | 58% | 3046 | 50% |
|  |  | E1 | 3035 | 39 | 184 | 49% | 3043 | 53% |