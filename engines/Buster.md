# Engine: Buster

Author: Anders Carlsson

Home: https://github.com/andersrcarlsson-stack/Buster-Chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2192<sub>(+12) | 2491<sub>(-51) | 2622<sub>(+4) |  |
| 7.0.3 | 2026-10-29 | 2180<sub>(-64) | 2542<sub>(-41) | 2618<sub>(+23) |  |
| 7.0.2 | 2026-09-26 | 2244 | 2583 | 2595 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.4 | 2026-11-05 | 2207<sub>(+16) | 2506<sub>(+22) | 2570<sub>(+55) |  |
| 7.0.3 | 2026-10-29 | 2191<sub>(-14) | 2484<sub>(-18) | 2515<sub>(-111) |  |
| 7.0.2 | 2026-09-26 | 2205 | 2502 | 2626 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0.2 | 2026-09-26 | 2205 | 2502 | 2626 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Buster+<version>&body=###%20Engine%20name%0ABuster%0A%0A###%20Version%0A7.0.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:36:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0.2", "7.0.3", "7.0.4"]
  y-axis "Elo Rating" 2100 --> 2700
  line "E1: STC (8.0+0.08s)" [2244, 2180, 2192]
  line "E1: LTC (60.0+0.60s)" [2583, 2542, 2491]
  line "E1: VLTC (2m24s+1.12s)" [2595, 2618, 2622]
  line "P1: STC (8.0+0.08s)" [2205, 2191, 2207]
  line "P1: LTC (60.0+0.60s)" [2502, 2484, 2506]
  line "P1: VLTC (2m24s+1.12s)" [2626, 2515, 2570]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2570 | 44 | 172 | 50% | 2574 | 29% |
|  |  | E1 | 2622 | 32 | 352 | 48% | 2633 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2491 | 35 | 280 | 52% | 2475 | 29% |
|  |  | P1 | 2506 | 38 | 236 | 49% | 2510 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2192 | 35 | 288 | 51% | 2178 | 26% |
|  |  | P1 | 2207 | 41 | 204 | 48% | 2232 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2515 | 45 | 168 | 56% | 2444 | 32% |
|  |  | E1 | 2618 | 37 | 260 | 53% | 2580 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2484 | 44 | 188 | 57% | 2361 | 28% |
|  |  | E1 | 2542 | 30 | 396 | 57% | 2444 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2191 | 43 | 206 | 57% | 2097 | 26% |
|  |  | E1 | 2180 | 39 | 244 | 55% | 2107 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2626 | 56 | 104 | 50% | 2626 | 31% |
|  |  | E1 | 2595 | 40 | 212 | 54% | 2550 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2502 | 100 | 32 | 52% | 2491 | 28% |
|  |  | E1 | 2583 | 45 | 164 | 53% | 2557 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2205 | 93 | 40 | 59% | 2126 | 23% |
|  |  | E1 | 2244 | 46 | 156 | 49% | 2252 | 30% |