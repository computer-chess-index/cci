# Engine: Arcanum

Author: Lars Aurud

Home: https://github.com/LarsAur/Arcanum

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 2815 | 3150 | 3248 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.8 | 2026-05-16 | 3015 | 3282 | 3376 |  |
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

Generated: 2026-10-19 04:35:51

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
| 2.8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3293 | 24 | 448 | 50% | 3295 | 66% |
|  |  | P1 | 3376 | 41 | 158 | 55% | 3316 | 64% |
|  |  | E1 | 3248 | 36 | 228 | 54% | 3164 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3237 | 26 | 416 | 50% | 3233 | 57% |
|  |  | P1 | 3282 | 42 | 154 | 53% | 3244 | 60% |
|  |  | E1 | 3150 | 35 | 230 | 54% | 3092 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2915 | 24 | 504 | 49% | 2928 | 44% |
|  |  | P1 | 3015 | 42 | 164 | 55% | 2970 | 49% |
|  |  | E1 | 2815 | 33 | 256 | 44% | 2861 | 51% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3272 | 27 | 394 | 54% | 3237 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3212 | 26 | 424 | 50% | 3193 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2907 | 23 | 554 | 49% | 2905 | 44% |