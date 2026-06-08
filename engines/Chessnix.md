# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2863<sub>(+new) | 3124<sub>(+new) | 3216<sub>(+new) |  |
| 0.0 | 2026-02-25 |  |  |  |  |
| 1.3 | 2026-02-15 | 2853<sub>(+256) | 3050<sub>(+289) | 3150<sub>(+223) |  |
| 1.2 | 2025-12-12 | 2597<sub>(+280) | 2761<sub>(+173) | 2927<sub>(+261) |  |
| 1.0 | 2025-11-08 | 2317<sub>(+new) | 2588<sub>(+new) | 2666<sub>(+new) | too many irregular games |
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

Generated: 2026-06-08 06:23:31

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "STC (8.0+0.08s)" [2317, 2597, 2853, 2863]
  line "STC (8.0+0.08s)" [2317, 2597, 2853, 2863]
  line "LTC (60.0+0.60s)" [2588, 2761, 3050, 3124]
  line "VLTC (2m24s+1.12s)" [2666, 2927, 3150, 3216]
  line "VLTC (2m24s+1.12s)" [2666, 2927, 3150, 3216]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 3216 | 41 | 160 | 53% | 3197 | 56% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 3124 | 43 | 164 | 51% | 3114 | 43% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2863 | 44 | 156 | 49% | 2874 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3150 | 100 | 26 | 56% | 3108 | 58% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 3050 | 75 | 52 | 46% | 3074 | 46% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 2853 | 123 | 22 | 52% | 2830 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2927 | 158 | 12 | 46% | 2963 | 25% |
| 1.2 | LTC <sub>(60.0+0.60s)</sub> | 2761 | 79 | 52 | 52% | 2745 | 31% |
| 1.2 | STC <sub>(8.0+0.08s)</sub> | 2597 | 149 | 16 | 63% | 2477 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2666 | 100 | 32 | 33% | 2809 | 41% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2588 | 145 | 16 | 41% | 2673 | 19% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2317 | 71 | 70 | 41% | 2392 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |