# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.6 | 2026-11-12 | 2201<sub>(+87) | 2333<sub>(-17) | 2515<sub>(+55) |  |
| 1.0.4 | 2026-11-10 | 2114 | 2350 | 2460 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.6 | 2026-11-12 | 2126<sub>(+113) | 2589<sub>(+240) | 2596<sub>(+305) |  |
| 1.0.4 | 2026-11-10 | 2013 | 2349 | 2291 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2013 | 2349 | 2291 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ankax+<version>&body=###%20Engine%20name%0AAnkax%0A%0A###%20Version%0A1.0.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-15 05:35:40

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2114, 2201]
  line "E1: LTC (60.0+0.60s)" [2350, 2333]
  line "E1: VLTC (2m24s+1.12s)" [2460, 2515]
  line "P1: STC (8.0+0.08s)" [2013, 2126]
  line "P1: LTC (60.0+0.60s)" [2349, 2589]
  line "P1: VLTC (2m24s+1.12s)" [2291, 2596]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2596 | 156 | 12 | 67% | 2466 | 33% |
|  |  | E1 | 2515 | 98 | 32 | 58% | 2445 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2589 | 178 | 8 | 63% | 2485 | 50% |
|  |  | E1 | 2333 | 122 | 24 | 29% | 2520 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2126 | 169 | 12 | 46% | 2176 | 8% |
|  |  | E1 | 2201 | 104 | 36 | 29% | 2403 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2291 | 46 | 166 | 48% | 2310 | 23% |
|  |  | E1 | 2460 | 42 | 196 | 53% | 2438 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2349 | 50 | 142 | 58% | 2273 | 28% |
|  |  | E1 | 2350 | 41 | 200 | 51% | 2330 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2013 | 49 | 160 | 51% | 1974 | 18% |
|  |  | E1 | 2114 | 43 | 204 | 55% | 2041 | 21% |