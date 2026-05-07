# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2927<sub>(+new) | 3187<sub>(+new) | 3278<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2917<sub>(+255) | 3114<sub>(+288) | 3213<sub>(+224) |  |
| 1.2 | 2025-12-12 | 2662<sub>(+285) | 2826<sub>(+176) | 2989<sub>(+259) |  |
| 1.0 | 2025-11-08 | 2377<sub>(+new) | 2650<sub>(+new) | 2730<sub>(+new) | too many irregular games |
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

Generated: 2026-05-07 06:23:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2377, 2662, 2917, 2927]
  line "STC (8.0+0.08s)" [2377, 2662, 2917, 2927]
  line "LTC (60.0+0.60s)" [2650, 2826, 3114, 3187]
  line "VLTC (2m24s+1.12s)" [2730, 2989, 3213, 3278]
  line "VLTC (2m24s+1.12s)" [2730, 2989, 3213, 3278]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3278 | 41 | 160 | 53% | 3259 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3187 | 43 | 164 | 51% | 3178 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2927 | 44 | 156 | 49% | 2938 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3213 | 100 | 26 | 56% | 3171 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3114 | 75 | 52 | 46% | 3139 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2917 | 123 | 22 | 52% | 2894 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2989 | 158 | 12 | 46% | 3025 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2826 | 78 | 52 | 52% | 2808 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2662 | 149 | 16 | 63% | 2543 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2730 | 100 | 32 | 33% | 2873 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2650 | 146 | 16 | 41% | 2735 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2377 | 71 | 70 | 41% | 2453 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |