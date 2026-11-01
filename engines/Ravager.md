# Engine: Ravager

Author: Abhinav Tiwari

Home: https://github.com/erensh27/Ravager

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3418<sub>(+414) | 3669<sub>(+309) | 3721<sub>(+216) |  |
| 3.3.0 | 2026-10-09 | 3004<sub>(+412) | 3360<sub>(+317) | 3505<sub>(+323) |  |
| 2.0 | 2026-08-23 | 2592 | 3043 | 3182 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-22 | 3564<sub>(+377) | 3787<sub>(+293) | 3781<sub>(+187) |  |
| 3.3.0 | 2026-10-09 | 3187<sub>(+397) | 3494<sub>(+269) | 3594<sub>(+210) |  |
| 2.0 | 2026-08-23 | 2790 | 3225 | 3384 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-08-23 | 2757 | 3109 | 3220 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ravager+<version>&body=###%20Engine%20name%0ARavager%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:41:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3.0", "3"]
  y-axis "Elo Rating" 2500 --> 3800
  line "E1: STC (8.0+0.08s)" [2592, 3004, 3418]
  line "E1: LTC (60.0+0.60s)" [3043, 3360, 3669]
  line "E1: VLTC (2m24s+1.12s)" [3182, 3505, 3721]
  line "P1: STC (8.0+0.08s)" [2790, 3187, 3564]
  line "P1: LTC (60.0+0.60s)" [3225, 3494, 3787]
  line "P1: VLTC (2m24s+1.12s)" [3384, 3594, 3781]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3781 | 41 | 144 | 56% | 3744 | 79% |
|  |  | E1 | 3721 | 32 | 224 | 47% | 3735 | 86% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3787 | 42 | 136 | 48% | 3796 | 79% |
|  |  | E1 | 3669 | 38 | 170 | 54% | 3636 | 81% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3418 | 31 | 272 | 56% | 3371 | 61% |
|  |  | P1 | 3564 | 43 | 136 | 53% | 3534 | 71% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3594 | 43 | 134 | 53% | 3571 | 69% |
|  |  | E1 | 3505 | 34 | 208 | 50% | 3502 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3494 | 28 | 322 | 56% | 3448 | 68% |
|  |  | E1 | 3360 | 31 | 276 | 54% | 3326 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3187 | 36 | 216 | 50% | 3177 | 56% |
|  |  | E1 | 3004 | 36 | 226 | 54% | 2974 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3384 | 37 | 204 | 49% | 3395 | 54% |
|  |  | E1 | 3182 | 30 | 302 | 44% | 3231 | 56% |
|  |  | T1 | 3220 | 31 | 274 | 50% | 3218 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3225 | 39 | 184 | 48% | 3239 | 52% |
|  |  | E1 | 3043 | 30 | 322 | 42% | 3106 | 56% |
|  |  | T1 | 3109 | 30 | 302 | 50% | 3109 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2592 | 35 | 298 | 39% | 2711 | 26% |
|  |  | T1 | 2757 | 35 | 256 | 49% | 2761 | 38% |
|  |  | P1 | 2790 | 37 | 216 | 48% | 2801 | 43% |