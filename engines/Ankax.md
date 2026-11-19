# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2161<sub>(+70) | 2449<sub>(-13) | 2549<sub>(+4) |  |
| 1.0.6 | 2026-11-12 | 2091<sub>(-30) | 2462<sub>(+121) | 2545<sub>(+91) |  |
| 1.0.4 | 2026-11-10 | 2121 | 2341 | 2454 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-17 | 2171<sub>(+99) | 2403<sub>(-8) | 2488<sub>(-15) |  |
| 1.0.6 | 2026-11-12 | 2072<sub>(+36) | 2411<sub>(+54) | 2503<sub>(+184) |  |
| 1.0.4 | 2026-11-10 | 2036 | 2357 | 2319 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2036 | 2357 | 2319 |  |
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

Generated: 2026-11-19 05:35:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6", "1.1.0"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2121, 2091, 2161]
  line "E1: LTC (60.0+0.60s)" [2341, 2462, 2449]
  line "E1: VLTC (2m24s+1.12s)" [2454, 2545, 2549]
  line "P1: STC (8.0+0.08s)" [2036, 2072, 2171]
  line "P1: LTC (60.0+0.60s)" [2357, 2411, 2403]
  line "P1: VLTC (2m24s+1.12s)" [2319, 2503, 2488]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2488 | 66 | 72 | 53% | 2461 | 36% |
|  |  | E1 | 2549 | 53 | 116 | 48% | 2568 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2403 | 94 | 36 | 46% | 2444 | 31% |
|  |  | E1 | 2449 | 52 | 120 | 51% | 2439 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2171 | 69 | 72 | 48% | 2199 | 21% |
|  |  | E1 | 2161 | 58 | 128 | 52% | 2222 | 16% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2503 | 52 | 120 | 43% | 2574 | 31% |
|  |  | E1 | 2545 | 50 | 132 | 54% | 2512 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2411 | 50 | 132 | 46% | 2446 | 29% |
|  |  | E1 | 2462 | 48 | 148 | 53% | 2435 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2072 | 50 | 140 | 45% | 2125 | 21% |
|  |  | E1 | 2091 | 45 | 180 | 44% | 2155 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2319 | 43 | 186 | 49% | 2325 | 24% |
|  |  | E1 | 2454 | 41 | 204 | 52% | 2439 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2357 | 49 | 150 | 58% | 2287 | 28% |
|  |  | E1 | 2341 | 41 | 204 | 50% | 2329 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2121 | 42 | 208 | 56% | 2043 | 22% |
|  |  | P1 | 2036 | 47 | 172 | 51% | 1989 | 18% |