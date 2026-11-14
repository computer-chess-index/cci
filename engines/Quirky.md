# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 3011<sub>(+262) | 3217<sub>(+97) | 3236<sub>(+41) |  |
| 2.1 | 2025-11-25 | 2749 | 3120 | 3195 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 2997<sub>(+139) | 3221<sub>(+252) | 3281<sub>(+250) |  |
| 2.1 | 2025-11-25 | 2858 | 2969 | 3031 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 911<sub>(-2055) | 2109<sub>(-1091) | 1223<sub>(-2040) |  |
| 2.1 | 2025-11-25 | 2966 | 3200 | 3263 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Quirky+<version>&body=###%20Engine%20name%0AQuirky%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:41:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2749, 3011]
  line "E1: LTC (60.0+0.60s)" [3120, 3217]
  line "E1: VLTC (2m24s+1.12s)" [3195, 3236]
  line "P1: STC (8.0+0.08s)" [2858, 2997]
  line "P1: LTC (60.0+0.60s)" [2969, 3221]
  line "P1: VLTC (2m24s+1.12s)" [3031, 3281]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 900 --> 3300
  line "T1: STC (8.0+0.08s)" [2966, 911]
  line "T1: LTC (60.0+0.60s)" [3200, 2109]
  line "T1: VLTC (2m24s+1.12s)" [3263, 1223]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1223 | 21 | 1660 | 25% | 1688 | 3% |
|  |  | P1 | 3281 | 30 | 334 | 56% | 3131 | 53% |
|  |  | E1 | 3236 | 24 | 510 | 53% | 3202 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2109 | 23 | 928 | 44% | 2203 | 2% |
|  |  | P1 | 3221 | 31 | 304 | 56% | 3158 | 53% |
|  |  | E1 | 3217 | 24 | 544 | 57% | 3113 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 911 | 34 | 472 | 55% | 941 | 15% |
|  |  | P1 | 2997 | 27 | 524 | 66% | 2542 | 40% |
|  |  | E1 | 3011 | 26 | 580 | 66% | 2493 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3263 | 22 | 564 | 54% | 3235 | 59% |
|  |  | P1 | 3031 | 129 | 20 | 63% | 2903 | 45% |
|  |  | E1 | 3195 | 99 | 36 | 56% | 3002 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2969 | 115 | 28 | 64% | 2720 | 36% |
|  |  | E1 | 3120 | 92 | 32 | 48% | 3124 | 59% |
|  |  | T1 | 3200 | 25 | 438 | 52% | 3181 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2858 | 112 | 36 | 60% | 2638 | 25% |
|  |  | E1 | 2749 | 107 | 44 | 60% | 2502 | 16% |
|  |  | T1 | 2966 | 23 | 552 | 50% | 2947 | 44% |