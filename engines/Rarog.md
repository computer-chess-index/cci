# Engine: Rarog

Author: Miloslav Macůrek

Home: https://github.com/maelic13/rarog

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 2942<sub>(+110) | 3260<sub>(+141) | 3351<sub>(+119) |  |
| 2.5.0 | 2026-10-05 | 2832<sub>(+345) | 3119<sub>(+268) | 3232<sub>(+238) |  |
| 2.4.0 | 2026-09-11 | 2487 | 2851 | 2994 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.6.0 | 2026-10-22 | 3050<sub>(+230) | 3255<sub>(+85) | 3362<sub>(+92) |  |
| 2.5.0 | 2026-10-05 | 2820<sub>(+293) | 3170<sub>(+266) | 3270<sub>(+305) |  |
| 2.4.0 | 2026-09-11 | 2527 | 2904 | 2965 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-09-11 | 2614 | 2930 | 3015 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Rarog+<version>&body=###%20Engine%20name%0ARarog%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:41:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.4.0", "2.5.0", "2.6.0"]
  y-axis "Elo Rating" 2400 --> 3400
  line "E1: STC (8.0+0.08s)" [2487, 2832, 2942]
  line "E1: LTC (60.0+0.60s)" [2851, 3119, 3260]
  line "E1: VLTC (2m24s+1.12s)" [2994, 3232, 3351]
  line "P1: STC (8.0+0.08s)" [2527, 2820, 3050]
  line "P1: LTC (60.0+0.60s)" [2904, 3170, 3255]
  line "P1: VLTC (2m24s+1.12s)" [2965, 3270, 3362]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3362 | 36 | 200 | 51% | 3357 | 62% |
|  |  | E1 | 3351 | 28 | 334 | 49% | 3362 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3255 | 34 | 238 | 54% | 3225 | 55% |
|  |  | E1 | 3260 | 30 | 312 | 51% | 3251 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3050 | 43 | 162 | 51% | 3043 | 44% |
|  |  | E1 | 2942 | 31 | 312 | 50% | 2939 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3232 | 30 | 312 | 54% | 3205 | 55% |
|  |  | P1 | 3270 | 36 | 206 | 53% | 3248 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3119 | 32 | 268 | 54% | 3089 | 54% |
|  |  | P1 | 3170 | 35 | 230 | 48% | 3183 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2832 | 32 | 316 | 55% | 2786 | 37% |
|  |  | P1 | 2820 | 43 | 162 | 52% | 2805 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3015 | 35 | 256 | 53% | 2984 | 40% |
|  |  | P1 | 2965 | 39 | 198 | 51% | 2957 | 42% |
|  |  | E1 | 2994 | 29 | 367 | 52% | 2982 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2930 | 33 | 292 | 57% | 2861 | 38% |
|  |  | P1 | 2904 | 42 | 168 | 53% | 2869 | 43% |
|  |  | E1 | 2851 | 32 | 310 | 47% | 2882 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2614 | 36 | 266 | 52% | 2564 | 29% |
|  |  | P1 | 2527 | 46 | 156 | 46% | 2564 | 31% |
|  |  | E1 | 2487 | 36 | 252 | 41% | 2580 | 33% |