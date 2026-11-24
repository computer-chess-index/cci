# Engine: Liora

Author: Louis Simonet

Home: https://github.com/LFM57/liora-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2076<sub>(-35) | 2431<sub>(+37) | 2538<sub>(+46) |  |
| 11.0 | 2026-10-29 | 2111 | 2394 | 2492 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2179<sub>(+69) | 2395<sub>(+85) | 2483<sub>(+154) |  |
| 11.0 | 2026-10-29 | 2110 | 2310 | 2329 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.0 | 2026-10-29 | 2110 | 2310 | 2329 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Liora+<version>&body=###%20Engine%20name%0ALiora%0A%0A###%20Version%0A11.13" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:39:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.0", "11.13"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2111, 2076]
  line "E1: LTC (60.0+0.60s)" [2394, 2431]
  line "E1: VLTC (2m24s+1.12s)" [2492, 2538]
  line "P1: STC (8.0+0.08s)" [2110, 2179]
  line "P1: LTC (60.0+0.60s)" [2310, 2395]
  line "P1: VLTC (2m24s+1.12s)" [2329, 2483]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.13 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2483 | 51 | 128 | 51% | 2466 | 30% |
|  |  | E1 | 2538 | 40 | 224 | 52% | 2511 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2395 | 62 | 90 | 56% | 2334 | 27% |
|  |  | E1 | 2431 | 42 | 208 | 51% | 2412 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2179 | 54 | 120 | 52% | 2161 | 18% |
|  |  | E1 | 2076 | 46 | 162 | 50% | 2074 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2329 | 115 | 28 | 50% | 2327 | 7% |
|  |  | E1 | 2492 | 45 | 176 | 50% | 2491 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2310 | 88 | 46 | 47% | 2340 | 15% |
|  |  | E1 | 2394 | 37 | 268 | 45% | 2446 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2110 | 55 | 120 | 49% | 2117 | 15% |
|  |  | E1 | 2111 | 33 | 346 | 56% | 2052 | 15% |