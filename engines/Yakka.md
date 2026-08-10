# Engine: Yakka

Author: Christopher Crone

Home: https://github.com/CJDalrymple/Yakka

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-01-22 | 2755<sub>(+113) | 3017<sub>(+106) | 3100<sub>(+150) |  |
| 1.4 | 2025-11-11 | 2642 | 2911 | 2950 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Yakka+<version>&body=###%20Engine%20name%0AYakka%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 07:55:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5"]
  y-axis "Elo Rating" 2600 --> 3100
  line "STC (8.0+0.08s)" [2642, 2755]
  line "STC (8.0+0.08s)" [2642, 2755]
  line "LTC (60.0+0.60s)" [2911, 3017]
  line "VLTC (2m24s+1.12s)" [2950, 3100]
  line "VLTC (2m24s+1.12s)" [2950, 3100]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3100 | 23 | 544 | 49% | 3105 | 55% |
| 1.5 | LTC <sub>(60.0+0.60s)</sub> | 3017 | 26 | 424 | 48% | 3033 | 55% |
| 1.5 | STC <sub>(8.0+0.08s)</sub> | 2755 | 23 | 584 | 50% | 2747 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2950 | 34 | 260 | 52% | 2932 | 48% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2911 | 30 | 336 | 56% | 2851 | 42% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 2642 | 36 | 264 | 53% | 2604 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |