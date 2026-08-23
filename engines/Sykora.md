# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-02 | 2932<sub>(+223) | 3266<sub>(+166) | 3362<sub>(+181) |  |
| 3.1 | 2026-07-15 | 2709<sub>(+373) | 3100<sub>(+100) | 3181<sub>(+133) |  |
| 3.0 | 2026-07-12 | 2336<sub>(+new) | 3000<sub>(+new) | 3048<sub>(+new) |  |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 2001<sub>(+115) | 2357<sub>(+134) | 2439<sub>(+24) |  |
| 0.1.0 | 2026-02-17 | 1886 | 2223 | 2415 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:29:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1", "3.0", "3.1", "4.0"]
  y-axis "Elo Rating" 1800 --> 3400
  line "STC (8.0+0.08s)" [1886, 2001, 2336, 2709, 2932]
  line "STC (8.0+0.08s)" [1886, 2001, 2336, 2709, 2932]
  line "LTC (60.0+0.60s)" [2223, 2357, 3000, 3100, 3266]
  line "VLTC (2m24s+1.12s)" [2415, 2439, 3048, 3181, 3362]
  line "VLTC (2m24s+1.12s)" [2415, 2439, 3048, 3181, 3362]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3362 | 32 | 238 | 48% | 3374 | 77% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3266 | 37 | 180 | 54% | 3240 | 74% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 2932 | 37 | 184 | 55% | 2893 | 71% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3181 | 44 | 132 | 50% | 3178 | 70% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3100 | 44 | 132 | 52% | 3089 | 64% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2709 | 46 | 126 | 51% | 2696 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3048 | 48 | 124 | 56% | 2985 | 57% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3000 | 56 | 96 | 54% | 2952 | 46% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2336 | 34 | 240 | 65% | 2225 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2439 | 36 | 254 | 53% | 2415 | 34% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2357 | 33 | 304 | 50% | 2352 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 2001 | 34 | 306 | 51% | 1990 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2415 | 126 | 28 | 21% | 2719 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2223 | 70 | 70 | 46% | 2256 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1886 | 97 | 40 | 41% | 2007 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |