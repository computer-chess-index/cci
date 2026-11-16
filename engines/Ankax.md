# Engine: Ankax

Author: Amrou Anka

Home: https://github.com/amrouanka/ankax-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.6 | 2026-11-12 | 2136<sub>(+15) | 2373<sub>(+20) | 2514<sub>(+48) |  |
| 1.0.4 | 2026-11-10 | 2121 | 2353 | 2466 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.6 | 2026-11-12 | 2122<sub>(+108) | 2480<sub>(+126) | 2580<sub>(+286) |  |
| 1.0.4 | 2026-11-10 | 2014 | 2354 | 2294 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.4 | 2026-11-10 | 2014 | 2354 | 2294 |  |
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

Generated: 2026-11-16 05:35:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.4", "1.0.6"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2121, 2136]
  line "E1: LTC (60.0+0.60s)" [2353, 2373]
  line "E1: VLTC (2m24s+1.12s)" [2466, 2514]
  line "P1: STC (8.0+0.08s)" [2014, 2122]
  line "P1: LTC (60.0+0.60s)" [2354, 2480]
  line "P1: VLTC (2m24s+1.12s)" [2294, 2580]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.6 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2580 | 120 | 20 | 55% | 2539 | 40% |
|  |  | E1 | 2514 | 82 | 48 | 54% | 2475 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2373 | 96 | 36 | 42% | 2453 | 28% |
|  |  | P1 | 2480 | 132 | 16 | 41% | 2545 | 44% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2136 | 90 | 52 | 31% | 2334 | 15% |
|  |  | P1 | 2122 | 130 | 20 | 48% | 2156 | 15% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2294 | 45 | 174 | 48% | 2313 | 23% |
|  |  | E1 | 2466 | 42 | 196 | 53% | 2444 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2354 | 50 | 142 | 58% | 2280 | 28% |
|  |  | E1 | 2353 | 41 | 200 | 51% | 2333 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2014 | 48 | 164 | 51% | 1976 | 18% |
|  |  | E1 | 2121 | 42 | 208 | 56% | 2044 | 22% |