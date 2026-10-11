# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-28 | 2510 | 2890 | 3016 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-28 | 2858 | 3140 | 3333 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2988<sub>(+351) | 3232<sub>(+180) | 3301<sub>(+164) |  |
| 2.0 | 2026-08-28 | 2637 | 3052 | 3137 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ceylondemon+<version>&body=###%20Engine%20name%0ACeylondemon%0A%0A###%20Version%0A3.3" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 10:11:26

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2600 --> 3400
  line "" [2637, 2988]
  line "T1: STC (8.0+0.08s)" [2637, 2988]
  line "T1: LTC (60.0+0.60s)" [3052, 3232]
  line "" [3137, 3301]
  line "T1: VLTC (2m24s+1.12s)" [3137, 3301]
  line "" [2637,2510]
  line "E1: STC (8.0+0.08s)" [2637,2510]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3301 | 35 | 216 | 52% | 3282 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3232 | 37 | 196 | 52% | 3216 | 58% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2988 | 44 | 158 | 54% | 2948 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3137 | 29 | 360 | 54% | 3096 | 49% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3333 | 39 | 186 | 49% | 3341 | 54% |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3016 | 32 | 280 | 46% | 3051 | 50% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3140 | 36 | 234 | 50% | 3140 | 43% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2890 | 32 | 288 | 44% | 2943 | 44% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3052 | 31 | 312 | 52% | 3025 | 48% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2858 | 39 | 204 | 54% | 2828 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2510 | 34 | 270 | 45% | 2553 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2637 | 31 | 348 | 48% | 2650 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |