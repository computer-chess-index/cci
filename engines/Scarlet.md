# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2795<sub>(+728) | 3120<sub>(+693) | 3194<sub>(+652) |  |
| 1.0 | 2026-07-26 | 2067 | 2427 | 2542 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2824<sub>(+730) | 3062<sub>(+677) | 3139<sub>(+710) |  |
| 1.0 | 2026-07-26 | 2094 | 2385 | 2429 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:42:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2000 --> 3200
  line "E1: STC (8.0+0.08s)" [2067, 2795]
  line "E1: LTC (60.0+0.60s)" [2427, 3120]
  line "E1: VLTC (2m24s+1.12s)" [2542, 3194]
  line "P1: STC (8.0+0.08s)" [2094, 2824]
  line "P1: LTC (60.0+0.60s)" [2385, 3062]
  line "P1: VLTC (2m24s+1.12s)" [2429, 3139]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3139 | 34 | 256 | 53% | 3106 | 50% |
|  |  | E1 | 3194 | 28 | 376 | 51% | 3175 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3062 | 39 | 212 | 53% | 3024 | 39% |
|  |  | E1 | 3120 | 29 | 352 | 52% | 3092 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2824 | 32 | 318 | 47% | 2842 | 36% |
|  |  | E1 | 2795 | 30 | 380 | 55% | 2734 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2542 | 36 | 274 | 49% | 2546 | 26% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  |  | P1 | 2429 | 42 | 222 | 47% | 2445 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2427 | 36 | 278 | 52% | 2394 | 25% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  |  | P1 | 2385 | 44 | 192 | 47% | 2423 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2067 | 34 | 316 | 46% | 2111 | 20% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |
|  |  | P1 | 2094 | 39 | 236 | 49% | 2099 | 21% |