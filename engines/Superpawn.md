# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3202<sub>(+194) | 3429<sub>(+112) | 3483<sub>(+99) |  |
| 1.9.1 | 2026-10-18 | 3008<sub>(+211) | 3317<sub>(+189) | 3384<sub>(+191) |  |
| 1.9.0 | 2026-10-16 | 2797 | 3128 | 3193 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3166<sub>(+162) | 3343<sub>(+75) | 3436<sub>(+123) |  |
| 1.9.1 | 2026-10-18 | 3004<sub>(+187) | 3268<sub>(+164) | 3313<sub>(+140) |  |
| 1.9.0 | 2026-10-16 | 2817 | 3104 | 3173 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2817 | 3104 | 3173 |  |
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

Generated: 2026-11-16 05:43:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2797, 3008, 3202]
  line "E1: LTC (60.0+0.60s)" [3128, 3317, 3429]
  line "E1: VLTC (2m24s+1.12s)" [3193, 3384, 3483]
  line "P1: STC (8.0+0.08s)" [2817, 3004, 3166]
  line "P1: LTC (60.0+0.60s)" [3104, 3268, 3343]
  line "P1: VLTC (2m24s+1.12s)" [3173, 3313, 3436]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3436 | 30 | 262 | 54% | 3405 | 76% |
|  |  | E1 | 3483 | 33 | 234 | 51% | 3474 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3343 | 42 | 140 | 51% | 3339 | 76% |
|  |  | E1 | 3429 | 27 | 338 | 53% | 3409 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3166 | 34 | 226 | 53% | 3140 | 60% |
|  |  | E1 | 3202 | 32 | 270 | 53% | 3183 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3313 | 35 | 210 | 52% | 3301 | 62% |
|  |  | E1 | 3384 | 28 | 338 | 51% | 3378 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3268 | 34 | 228 | 49% | 3272 | 58% |
|  |  | E1 | 3317 | 31 | 296 | 53% | 3295 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3004 | 41 | 172 | 50% | 3005 | 46% |
|  |  | E1 | 3008 | 29 | 384 | 53% | 2982 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3173 | 43 | 194 | 60% | 2942 | 39% |
|  |  | E1 | 3193 | 34 | 292 | 55% | 3039 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3104 | 50 | 150 | 62% | 2796 | 32% |
|  |  | E1 | 3128 | 42 | 214 | 62% | 2839 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2797 | 42 | 220 | 61% | 2547 | 26% |
|  |  | P1 | 2817 | 47 | 176 | 58% | 2606 | 26% |