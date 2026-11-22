# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3200<sub>(+194) | 3428<sub>(+110) | 3480<sub>(+93) |  |
| 1.9.1 | 2026-10-18 | 3006<sub>(+210) | 3318<sub>(+194) | 3387<sub>(+196) |  |
| 1.9.0 | 2026-10-16 | 2796 | 3124 | 3191 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3175<sub>(+151) | 3353<sub>(+74) | 3445<sub>(+121) |  |
| 1.9.1 | 2026-10-18 | 3024<sub>(+180) | 3279<sub>(+156) | 3324<sub>(+135) |  |
| 1.9.0 | 2026-10-16 | 2844 | 3123 | 3189 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2844 | 3123 | 3189 |  |
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

Generated: 2026-11-22 05:43:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2796, 3006, 3200]
  line "E1: LTC (60.0+0.60s)" [3124, 3318, 3428]
  line "E1: VLTC (2m24s+1.12s)" [3191, 3387, 3480]
  line "P1: STC (8.0+0.08s)" [2844, 3024, 3175]
  line "P1: LTC (60.0+0.60s)" [3123, 3279, 3353]
  line "P1: VLTC (2m24s+1.12s)" [3189, 3324, 3445]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3445 | 30 | 266 | 54% | 3417 | 76% |
|  |  | E1 | 3480 | 32 | 242 | 51% | 3472 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3353 | 42 | 140 | 51% | 3349 | 76% |
|  |  | E1 | 3428 | 27 | 346 | 53% | 3409 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3175 | 32 | 254 | 52% | 3163 | 60% |
|  |  | E1 | 3200 | 31 | 282 | 52% | 3181 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3387 | 28 | 342 | 51% | 3376 | 64% |
|  |  | P1 | 3324 | 35 | 210 | 52% | 3312 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3318 | 30 | 302 | 53% | 3295 | 56% |
|  |  | P1 | 3279 | 33 | 244 | 49% | 3286 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3024 | 41 | 172 | 50% | 3027 | 46% |
|  |  | E1 | 3006 | 28 | 388 | 53% | 2981 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3189 | 42 | 194 | 60% | 2959 | 39% |
|  |  | E1 | 3191 | 34 | 292 | 55% | 3036 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3123 | 50 | 150 | 62% | 2812 | 32% |
|  |  | E1 | 3124 | 42 | 214 | 62% | 2834 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2844 | 47 | 176 | 58% | 2627 | 26% |
|  |  | E1 | 2796 | 42 | 220 | 61% | 2545 | 26% |