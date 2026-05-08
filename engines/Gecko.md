# Engine: Gecko

Author: Bingwen Yang

Home: https://github.com/sgtqwq/Gecko

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.30 | 2026-05-01 | 2557<sub>(+23) | 2923<sub>(+118) | 2970<sub>(+86) |  |
| 0.25.1 | 2026-04-12 | 2534<sub>(+89) | 2805<sub>(+96) | 2884<sub>(+116) |  |
| 0.25 | 2026-04-06 | 2445<sub>(+532) | 2709<sub>(+602) | 2768<sub>(+566) |  |
| 0.08 | 2026-02-05 | 1913 | 2107 | 2202 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gecko+<version>&body=###%20Engine%20name%0AGecko%0A%0A###%20Version%0A0.30" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-08 06:24:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.08", "0.25", "0.25.1", "0.30"]
  y-axis "Elo Rating" 1900 --> 3000
  line "STC (8.0+0.08s)" [1913, 2445, 2534, 2557]
  line "STC (8.0+0.08s)" [1913, 2445, 2534, 2557]
  line "LTC (60.0+0.60s)" [2107, 2709, 2805, 2923]
  line "VLTC (2m24s+1.12s)" [2202, 2768, 2884, 2970]
  line "VLTC (2m24s+1.12s)" [2202, 2768, 2884, 2970]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.30 | VLTC <sub>(2m24s+1.12s)</sub> | 2970 | 33 | 292 | 50% | 2967 | 36% |
| 0.30 | LTC <sub>(60.0+0.60s)</sub> | 2923 | 30 | 328 | 49% | 2934 | 42% |
| 0.30 | STC <sub>(8.0+0.08s)</sub> | 2557 | 36 | 272 | 51% | 2545 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2884 | 31 | 328 | 51% | 2878 | 37% |
| 0.25.1 | LTC <sub>(60.0+0.60s)</sub> | 2805 | 32 | 312 | 50% | 2807 | 33% |
| 0.25.1 | STC <sub>(8.0+0.08s)</sub> | 2534 | 31 | 356 | 51% | 2525 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.25 | VLTC <sub>(2m24s+1.12s)</sub> | 2768 | 36 | 236 | 55% | 2718 | 45% |
| 0.25 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 36 | 228 | 57% | 2646 | 47% |
| 0.25 | STC <sub>(8.0+0.08s)</sub> | 2445 | 37 | 236 | 55% | 2399 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.08 | VLTC <sub>(2m24s+1.12s)</sub> | 2202 | 28 | 392 | 46% | 2252 | 40% |
| 0.08 | LTC <sub>(60.0+0.60s)</sub> | 2107 | 29 | 384 | 48% | 2136 | 35% |
| 0.08 | STC <sub>(8.0+0.08s)</sub> | 1913 | 31 | 356 | 48% | 1937 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |