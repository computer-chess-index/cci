# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2152<sub>(+64) | 2456<sub>(-9) | 2530<sub>(-17) |  |
| 1.0.6 | 2026-11-12 | 2088<sub>(-32) | 2465<sub>(+123) | 2547<sub>(+91) |  |
| 1.0.4 | 2026-11-10 | 2120 | 2342 | 2456 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2172<sub>(+84) | 2423<sub>(+6) | 2506<sub>(-17) |  |
| 1.0.6 | 2026-11-12 | 2088<sub>(+43) | 2417<sub>(+50) | 2523<sub>(+194) |  |
| 1.0.4 | 2026-11-10 | 2045 | 2367 | 2329 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2045 | 2367 | 2329 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ankax+<version>&body=###%20Engine%20name%0AAnkax%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:35:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6", "1.1.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2120, 2088, 2152]
  line "E1: LTC (60.0+0.60s)" [2342, 2465, 2456]
  line "E1: VLTC (2m24s+1.12s)" [2456, 2547, 2530]
  line "P1: STC (8.0+0.08s)" [2045, 2088, 2172]
  line "P1: LTC (60.0+0.60s)" [2367, 2417, 2423]
  line "P1: VLTC (2m24s+1.12s)" [2329, 2523, 2506]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2506 | 50 | 128 | 51% | 2495 | 35% |
|  |  | E1 | 2530 | 41 | 200 | 48% | 2547 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2423 | 53 | 120 | 49% | 2439 | 28% |
|  |  | E1 | 2456 | 41 | 192 | 52% | 2438 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2172 | 46 | 160 | 49% | 2190 | 24% |
|  |  | E1 | 2152 | 42 | 216 | 50% | 2199 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2523 | 52 | 124 | 43% | 2591 | 31% |
|  |  | E1 | 2547 | 50 | 132 | 54% | 2515 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2417 | 49 | 140 | 45% | 2460 | 28% |
|  |  | E1 | 2465 | 48 | 148 | 53% | 2438 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2088 | 45 | 180 | 44% | 2153 | 24% |
|  |  | P1 | 2088 | 47 | 158 | 46% | 2134 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2329 | 43 | 186 | 49% | 2336 | 24% |
|  |  | E1 | 2456 | 41 | 204 | 52% | 2441 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2367 | 49 | 150 | 58% | 2298 | 28% |
|  |  | E1 | 2342 | 41 | 204 | 50% | 2329 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2045 | 47 | 172 | 51% | 1998 | 18% |
|  |  | E1 | 2120 | 42 | 208 | 56% | 2041 | 22% |