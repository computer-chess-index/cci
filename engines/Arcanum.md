# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2835<sub>(+93) | 3177<sub>(+52) | 3260<sub>(+93) |  |
| 2.7 | 2025-10-18 | 2742 | 3125 | 3167 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2874<sub>(+61) | 3143<sub>(+56) | 3245<sub>(+14) |  |
| 2.7 | 2025-10-18 | 2813 | 3087 | 3231 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2915<sub>(+8) | 3237<sub>(+25) | 3293<sub>(+21) |  |
| 2.7 | 2025-10-18 | 2907 | 3212 | 3272 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arcanum+<version>&body=###%20Engine%20name%0AArcanum%0A%0A###%20Version%0A2.8" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:35:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2742, 2835]
  line "E1: LTC (60.0+0.60s)" [3125, 3177]
  line "E1: VLTC (2m24s+1.12s)" [3167, 3260]
  line "P1: STC (8.0+0.08s)" [2813, 2874]
  line "P1: LTC (60.0+0.60s)" [3087, 3143]
  line "P1: VLTC (2m24s+1.12s)" [3231, 3245]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2900 --> 3300
  line "T1: STC (8.0+0.08s)" [2907, 2915]
  line "T1: LTC (60.0+0.60s)" [3212, 3237]
  line "T1: VLTC (2m24s+1.12s)" [3272, 3293]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3245 | 34 | 232 | 52% | 3216 | 66% |
|  |  | E1 | 3260 | 28 | 352 | 52% | 3216 | 59% |
|  |  | T1 | 3293 | 24 | 448 | 50% | 3295 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3143 | 35 | 218 | 50% | 3133 | 59% |
|  |  | E1 | 3177 | 29 | 322 | 53% | 3133 | 62% |
|  |  | T1 | 3237 | 26 | 416 | 50% | 3233 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2835 | 29 | 346 | 46% | 2870 | 49% |
|  |  | T1 | 2915 | 24 | 504 | 49% | 2928 | 44% |
|  |  | P1 | 2874 | 33 | 260 | 48% | 2889 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3272 | 27 | 394 | 54% | 3237 | 56% |
|  |  | P1 | 3231 | 111 | 26 | 71% | 2993 | 50% |
|  |  | E1 | 3167 | 97 | 34 | 65% | 3012 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3212 | 26 | 424 | 50% | 3193 | 57% |
|  |  | P1 | 3087 | 102 | 24 | 42% | 3156 | 67% |
|  |  | E1 | 3125 | 89 | 40 | 56% | 3060 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2907 | 23 | 554 | 49% | 2905 | 44% |
|  |  | P1 | 2813 | 111 | 28 | 41% | 2865 | 32% |
|  |  | E1 | 2742 | 86 | 46 | 58% | 2676 | 24% |