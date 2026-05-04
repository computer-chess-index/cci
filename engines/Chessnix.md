# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2925<sub>(+new) | 3186<sub>(+new) | 3276<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2915<sub>(+254) | 3113<sub>(+289) | 3212<sub>(+226) |  |
| 1.2 | 2025-12-12 | 2661<sub>(+285) | 2824<sub>(+175) | 2986<sub>(+256) |  |
| 1.0 | 2025-11-08 | 2376<sub>(+new) | 2649<sub>(+new) | 2730<sub>(+new) | too many irregular games |
| 0.1 | 2025-10-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-04 06:23:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2376, 2661, 2915, 2925]
  line "STC (8.0+0.08s)" [2376, 2661, 2915, 2925]
  line "LTC (60.0+0.60s)" [2649, 2824, 3113, 3186]
  line "VLTC (2m24s+1.12s)" [2730, 2986, 3212, 3276]
  line "VLTC (2m24s+1.12s)" [2730, 2986, 3212, 3276]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3276 | 41 | 160 | 53% | 3258 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3186 | 43 | 164 | 51% | 3177 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2925 | 44 | 156 | 49% | 2936 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3212 | 100 | 26 | 56% | 3170 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3113 | 75 | 52 | 46% | 3137 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2915 | 123 | 22 | 52% | 2893 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2986 | 158 | 12 | 46% | 3024 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2824 | 78 | 52 | 52% | 2808 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2661 | 149 | 16 | 63% | 2542 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2730 | 100 | 32 | 33% | 2873 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2649 | 146 | 16 | 41% | 2734 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2376 | 71 | 70 | 41% | 2452 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |