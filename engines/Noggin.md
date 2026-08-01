# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2637<sub>(+48) | 2867<sub>(+47) | 2911<sub>(-14) |  |
| 2.0 | 2026-06-14 | 2589<sub>(+new) | 2820<sub>(+new) | 2925<sub>(+new) |  |
| 1.0 | 2026-06-09 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Noggin+<version>&body=###%20Engine%20name%0ANoggin%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-01 06:27:23

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "STC (8.0+0.08s)" [2589, 2637]
  line "STC (8.0+0.08s)" [2589, 2637]
  line "LTC (60.0+0.60s)" [2820, 2867]
  line "VLTC (2m24s+1.12s)" [2925, 2911]
  line "VLTC (2m24s+1.12s)" [2925, 2911]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2911 | 45 | 148 | 52% | 2897 | 41% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2867 | 43 | 160 | 51% | 2858 | 44% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2637 | 48 | 144 | 48% | 2653 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2925 | 49 | 128 | 56% | 2878 | 41% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2820 | 56 | 92 | 51% | 2808 | 46% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2589 | 52 | 124 | 44% | 2645 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |