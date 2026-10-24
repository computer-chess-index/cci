# Engine: Zenith

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/zenith

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 3012<sub>(+172) | 3341<sub>(+209) | 3444<sub>(+146) |  |
| 1.2.198 | 2026-08-01 | 2840 | 3132 | 3298 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-10-15 | 3078<sub>(+228) | 3416<sub>(+162) | 3482<sub>(+81) |  |
| 1.2.198 | 2026-08-01 | 2850 | 3254 | 3401 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.198 | 2026-08-01 | 3067 | 3339 | 3387 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zenith+<version>&body=###%20Engine%20name%0AZenith%0A%0A###%20Version%0A1.2.198" target="_blank">Submit new version</a>

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

Generated: 2026-10-24 04:44:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.198", "2.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2840, 3012]
  line "E1: LTC (60.0+0.60s)" [3132, 3341]
  line "E1: VLTC (2m24s+1.12s)" [3298, 3444]
  line "P1: STC (8.0+0.08s)" [2850, 3078]
  line "P1: LTC (60.0+0.60s)" [3254, 3416]
  line "P1: VLTC (2m24s+1.12s)" [3401, 3482]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3482 | 34 | 220 | 51% | 3471 | 69% |
|  |  | E1 | 3444 | 30 | 288 | 49% | 3451 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3416 | 40 | 162 | 53% | 3393 | 66% |
|  |  | E1 | 3341 | 32 | 258 | 52% | 3325 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3078 | 39 | 192 | 53% | 3047 | 44% |
|  |  | E1 | 3012 | 39 | 200 | 53% | 2981 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.198 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3298 | 29 | 326 | 41% | 3370 | 62% |
|  |  | T1 | 3387 | 31 | 272 | 51% | 3363 | 69% |
|  |  | P1 | 3401 | 33 | 252 | 44% | 3441 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3132 | 28 | 370 | 39% | 3225 | 51% |
|  |  | T1 | 3339 | 34 | 236 | 54% | 3266 | 64% |
|  |  | P1 | 3254 | 32 | 288 | 39% | 3339 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2840 | 34 | 308 | 64% | 2711 | 29% |
|  |  | T1 | 3067 | 26 | 424 | 47% | 3067 | 54% |
|  |  | P1 | 2850 | 45 | 180 | 59% | 2757 | 26% |