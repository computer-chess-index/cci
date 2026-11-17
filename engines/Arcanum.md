# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2836<sub>(+87) | 3183<sub>(+52) | 3267<sub>(+92) |  |
| 2.7 | 2025-10-18 | 2749 | 3131 | 3175 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2867<sub>(+59) | 3136<sub>(+55) | 3237<sub>(+17) |  |
| 2.7 | 2025-10-18 | 2808 | 3081 | 3220 |  |
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

Generated: 2026-11-17 05:35:57

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.7", "2.8"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2749, 2836]
  line "E1: LTC (60.0+0.60s)" [3131, 3183]
  line "E1: VLTC (2m24s+1.12s)" [3175, 3267]
  line "P1: STC (8.0+0.08s)" [2808, 2867]
  line "P1: LTC (60.0+0.60s)" [3081, 3136]
  line "P1: VLTC (2m24s+1.12s)" [3220, 3237]
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
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3237 | 34 | 226 | 52% | 3208 | 65% |
|  |  | E1 | 3267 | 28 | 352 | 52% | 3221 | 59% |
|  |  | T1 | 3293 | 24 | 448 | 50% | 3295 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3136 | 35 | 218 | 50% | 3127 | 59% |
|  |  | E1 | 3183 | 29 | 322 | 53% | 3140 | 62% |
|  |  | T1 | 3237 | 26 | 416 | 50% | 3233 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2867 | 33 | 260 | 48% | 2882 | 47% |
|  |  | E1 | 2836 | 29 | 338 | 45% | 2877 | 49% |
|  |  | T1 | 2915 | 24 | 504 | 49% | 2928 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3272 | 27 | 394 | 54% | 3237 | 56% |
|  |  | P1 | 3220 | 111 | 26 | 71% | 2981 | 50% |
|  |  | E1 | 3175 | 97 | 34 | 65% | 3019 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3212 | 26 | 424 | 50% | 3193 | 57% |
|  |  | P1 | 3081 | 102 | 24 | 42% | 3150 | 67% |
|  |  | E1 | 3131 | 89 | 40 | 56% | 3066 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2907 | 23 | 554 | 49% | 2905 | 44% |
|  |  | P1 | 2808 | 111 | 28 | 41% | 2861 | 32% |
|  |  | E1 | 2749 | 86 | 46 | 58% | 2682 | 24% |