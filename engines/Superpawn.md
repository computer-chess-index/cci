# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3204<sub>(+191) | 3429<sub>(+111) | 3478<sub>(+91) |  |
| 1.9.1 | 2026-10-18 | 3013<sub>(+216) | 3318<sub>(+193) | 3387<sub>(+196) |  |
| 1.9.0 | 2026-10-16 | 2797 | 3125 | 3191 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3195<sub>(+152) | 3372<sub>(+73) | 3463<sub>(+120) |  |
| 1.9.1 | 2026-10-18 | 3043<sub>(+180) | 3299<sub>(+155) | 3343<sub>(+135) |  |
| 1.9.0 | 2026-10-16 | 2863 | 3144 | 3208 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2863 | 3144 | 3208 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:43:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2797, 3013, 3204]
  line "E1: LTC (60.0+0.60s)" [3125, 3318, 3429]
  line "E1: VLTC (2m24s+1.12s)" [3191, 3387, 3478]
  line "P1: STC (8.0+0.08s)" [2863, 3043, 3195]
  line "P1: LTC (60.0+0.60s)" [3144, 3299, 3372]
  line "P1: VLTC (2m24s+1.12s)" [3208, 3343, 3463]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3463 | 30 | 266 | 54% | 3433 | 76% |
|  |  | E1 | 3478 | 32 | 246 | 51% | 3471 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3372 | 41 | 144 | 51% | 3370 | 76% |
|  |  | E1 | 3429 | 27 | 358 | 53% | 3407 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3195 | 32 | 258 | 52% | 3182 | 60% |
|  |  | E1 | 3204 | 30 | 306 | 53% | 3183 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3343 | 35 | 210 | 52% | 3330 | 62% |
|  |  | E1 | 3387 | 28 | 346 | 51% | 3376 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3299 | 33 | 248 | 49% | 3306 | 59% |
|  |  | E1 | 3318 | 30 | 302 | 53% | 3295 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3043 | 40 | 180 | 50% | 3044 | 45% |
|  |  | E1 | 3013 | 28 | 400 | 53% | 2985 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3208 | 43 | 194 | 60% | 2975 | 39% |
|  |  | E1 | 3191 | 34 | 292 | 55% | 3036 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3144 | 50 | 150 | 62% | 2830 | 32% |
|  |  | E1 | 3125 | 42 | 214 | 62% | 2835 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2797 | 42 | 220 | 61% | 2546 | 26% |
|  |  | P1 | 2863 | 47 | 176 | 58% | 2643 | 26% |