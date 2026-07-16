# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-07-07 | 2857<sub>(+642) | 3167<sub>(+539) | 3244<sub>(+456) |  |
| 3.0 | 2026-05-25 | 2215<sub>(-242) | 2628<sub>(-189) | 2788<sub>(-100) |  |
| 2.2 | 2025-10-08 | 2457<sub>(+new) | 2817<sub>(+new) | 2888<sub>(+new) |  |
| 2.1 | 2024-07-16 |  |  |  |  |
| 2.0 | 2024-01-01 |  |  |  |  |
| 1.1 | 2023-12-28 |  |  |  |  |
| 1.0 | 2023-12-27 |  |  |  |  |
| 0.6-beta | 2023-12-26 |  |  |  |  |
| 0.5-beta | 2023-12-24 |  |  |  |  |
| 0.4-beta | 2023-12-24 |  |  |  |  |
| 0.3-beta | 2023-12-16 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:29:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2457, 2215, 2857]
  line "STC (8.0+0.08s)" [2457, 2215, 2857]
  line "LTC (60.0+0.60s)" [2817, 2628, 3167]
  line "VLTC (2m24s+1.12s)" [2888, 2788, 3244]
  line "VLTC (2m24s+1.12s)" [2888, 2788, 3244]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2457, 2215, 2857]
  line "STC (8.0+0.08s)" [2457, 2215, 2857]
  line "LTC (60.0+0.60s)" [2817, 2628, 3167]
  line "VLTC (2m24s+1.12s)" [2888, 2788, 3244]
  line "VLTC (2m24s+1.12s)" [2888, 2788, 3244]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 38 | 186 | 53% | 3200 | 66% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3167 | 42 | 160 | 55% | 3124 | 58% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2857 | 40 | 192 | 50% | 2844 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2788 | 44 | 162 | 47% | 2812 | 35% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2628 | 45 | 156 | 49% | 2637 | 35% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2215 | 52 | 124 | 48% | 2237 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2888 | 24 | 510 | 47% | 2915 | 48% |
| 2.2 | LTC <sub>(60.0+0.60s)</sub> | 2817 | 27 | 434 | 50% | 2819 | 39% |
| 2.2 | STC <sub>(8.0+0.08s)</sub> | 2457 | 25 | 540 | 48% | 2479 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |