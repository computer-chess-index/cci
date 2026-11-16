# Engine: StockDory

Author: Shaheryar Sohail

Home: https://github.com/TheBlackPlague/StockDory

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3214<sub>(+121) | 3417<sub>(+42) | 3498<sub>(+77) |  |
| 0.3 | 2026-10-06 | 3093<sub>(+60) | 3375<sub>(+74) | 3421<sub>(+99) |  |
| 0.2 | 2026-09-15 | 3033 | 3301 | 3322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4 | 2026-11-02 | 3195<sub>(+135) | 3387<sub>(+74) | 3416<sub>(+32) |  |
| 0.3 | 2026-10-06 | 3060<sub>(+60) | 3313<sub>(+138) | 3384<sub>(+136) |  |
| 0.2 | 2026-09-15 | 3000 | 3175 | 3248 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2 | 2026-09-15 | 3000 | 3175 | 3248 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+StockDory+<version>&body=###%20Engine%20name%0AStockDory%0A%0A###%20Version%0A0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:43:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2", "0.3", "0.4"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3033, 3093, 3214]
  line "E1: LTC (60.0+0.60s)" [3301, 3375, 3417]
  line "E1: VLTC (2m24s+1.12s)" [3322, 3421, 3498]
  line "P1: STC (8.0+0.08s)" [3000, 3060, 3195]
  line "P1: LTC (60.0+0.60s)" [3175, 3313, 3387]
  line "P1: VLTC (2m24s+1.12s)" [3248, 3384, 3416]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3416 | 37 | 182 | 49% | 3422 | 73% |
|  |  | E1 | 3498 | 31 | 242 | 51% | 3494 | 79% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3417 | 30 | 276 | 51% | 3407 | 72% |
|  |  | P1 | 3387 | 43 | 128 | 51% | 3382 | 80% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3214 | 31 | 258 | 53% | 3194 | 68% |
|  |  | P1 | 3195 | 32 | 256 | 52% | 3186 | 67% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3384 | 35 | 216 | 53% | 3306 | 69% |
|  |  | E1 | 3421 | 27 | 355 | 56% | 3339 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3313 | 32 | 264 | 54% | 3258 | 59% |
|  |  | E1 | 3375 | 28 | 344 | 55% | 3308 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3060 | 41 | 178 | 56% | 2958 | 49% |
|  |  | E1 | 3093 | 29 | 350 | 54% | 3039 | 52% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3248 | 69 | 56 | 43% | 3302 | 57% |
|  |  | E1 | 3322 | 40 | 158 | 53% | 3303 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3175 | 60 | 72 | 42% | 3232 | 68% |
|  |  | E1 | 3301 | 44 | 134 | 43% | 3349 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3000 | 91 | 36 | 47% | 3027 | 39% |
|  |  | E1 | 3033 | 45 | 146 | 54% | 2996 | 46% |