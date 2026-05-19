# Engine: Publius

Author: Pawel Koziol

Home: https://github.com/nescitus/publius

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2025-12-31 | 2471<sub>(-369) | 2758<sub>(-354) | 2834<sub>(-303) |  |
| 1.0 | 2025-10-19 | 2840 | 3112 | 3137 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Publius+<version>&body=###%20Engine%20name%0APublius%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:27:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2400 --> 3200
  line "STC (8.0+0.08s)" [2840, 2471]
  line "STC (8.0+0.08s)" [2840, 2471]
  line "LTC (60.0+0.60s)" [3112, 2758]
  line "VLTC (2m24s+1.12s)" [3137, 2834]
  line "VLTC (2m24s+1.12s)" [3137, 2834]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2834 | 28 | 418 | 48% | 2853 | 36% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2758 | 27 | 436 | 50% | 2759 | 33% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2471 | 26 | 514 | 48% | 2472 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3137 | 34 | 232 | 49% | 3148 | 57% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3112 | 34 | 248 | 52% | 3085 | 55% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2840 | 36 | 232 | 53% | 2807 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |