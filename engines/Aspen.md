# Engine: Aspen

Author: 

Home: https://github.com/ATheofanis/aspen-chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-05-23 |  |  |  |  |
| 2.2.0 | 2026-05-22 |  |  |  |  |
| 2.1.0 | 2026-05-21 | 2646<sub>(+new) | 2988<sub>(+new) | 3085<sub>(+new) |  |
| 2.0.0 | 2026-05-21 |  |  |  |  |
| 1.3.0 | 2026-05-20 | 2354<sub>(+171) | 2692<sub>(+49) | 2834<sub>(+156) |  |
| 1.2.3 | 2026-05-20 | 2183<sub>(+new) | 2643<sub>(+new) | 2678<sub>(+new) |  |
| 1.2.2 | 2026-05-19 |  |  |  |  |
| 1.2.1 | 2026-05-19 |  |  |  |  |
| 1.2.0 | 2026-05-19 |  |  |  |  |
| 1.0.1 | 2026-05-14 |  |  |  |  |
| 1.0.0 | 2026-05-12 |  |  |  |  |
| 0.2.0 | 2026-05-09 |  |  |  |  |
| 0.1.0 | 2026-05-02 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aspen+<version>&body=###%20Engine%20name%0AAspen%0A%0A###%20Version%0A2.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-07 06:22:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.2.3", "2.1.0"]
  y-axis "Elo Rating" 2100 --> 3100
  line "STC (8.0+0.08s)" [2354, 2183, 2646]
  line "STC (8.0+0.08s)" [2354, 2183, 2646]
  line "LTC (60.0+0.60s)" [2692, 2643, 2988]
  line "VLTC (2m24s+1.12s)" [2834, 2678, 3085]
  line "VLTC (2m24s+1.12s)" [2834, 2678, 3085]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3085 | 36 | 230 | 54% | 3050 | 46% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2988 | 31 | 312 | 52% | 2966 | 47% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2646 | 40 | 200 | 52% | 2624 | 35% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2834 | 59 | 92 | 54% | 2795 | 33% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2692 | 48 | 140 | 53% | 2662 | 32% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2354 | 47 | 158 | 45% | 2404 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2678 | 111 | 28 | 55% | 2624 | 18% |
| 1.2.3 | LTC <sub>(60.0+0.60s)</sub> | 2643 | 101 | 36 | 67% | 2487 | 22% |
| 1.2.3 | STC <sub>(8.0+0.08s)</sub> | 2183 | 84 | 48 | 50% | 2188 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |