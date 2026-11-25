# Engine: Quirky

Author: Anton Kernozhitsky

Home: https://github.com/Wind-Eagle/Quirky

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 3015<sub>(+114) | 3231<sub>(+54) | 3251<sub>(+39) |  |
| 2.1 | 2025-11-25 | 2901 | 3177 | 3212 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-05-16 | 3039<sub>(+112) | 3244<sub>(+92) | 3305<sub>(+65) |  |
| 2.1 | 2025-11-25 | 2927 | 3152 | 3240 |  |
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

Generated: 2026-11-25 05:41:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0"]
  y-axis "Elo Rating" 2900 --> 3400
  line "E1: STC (8.0+0.08s)" [2901, 3015]
  line "E1: LTC (60.0+0.60s)" [3177, 3231]
  line "E1: VLTC (2m24s+1.12s)" [3212, 3251]
  line "P1: STC (8.0+0.08s)" [2927, 3039]
  line "P1: LTC (60.0+0.60s)" [3152, 3244]
  line "P1: VLTC (2m24s+1.12s)" [3240, 3305]
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
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3251 | 24 | 538 | 53% | 3216 | 44% |
|  |  | T1 | 1223 | 21 | 1660 | 25% | 1688 | 3% |
|  |  | P1 | 3305 | 29 | 346 | 56% | 3156 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3231 | 23 | 580 | 57% | 3128 | 49% |
|  |  | T1 | 2109 | 23 | 928 | 44% | 2203 | 2% |
|  |  | P1 | 3244 | 29 | 344 | 54% | 3193 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 911 | 34 | 472 | 55% | 941 | 15% |
|  |  | P1 | 3039 | 25 | 578 | 65% | 2620 | 41% |
|  |  | E1 | 3015 | 25 | 632 | 65% | 2535 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3263 | 22 | 564 | 54% | 3235 | 59% |
|  |  | P1 | 3240 | 57 | 88 | 60% | 3146 | 58% |
|  |  | E1 | 3212 | 52 | 112 | 53% | 3139 | 49% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3200 | 25 | 438 | 52% | 3181 | 63% |
|  |  | P1 | 3152 | 59 | 94 | 62% | 3004 | 43% |
|  |  | E1 | 3177 | 52 | 104 | 52% | 3158 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2966 | 23 | 552 | 50% | 2947 | 44% |
|  |  | P1 | 2927 | 60 | 96 | 53% | 2853 | 41% |
|  |  | E1 | 2901 | 56 | 116 | 61% | 2716 | 30% |