# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2537<sub>(-43) | 2854<sub>(+47) | 2954<sub>(+19) |  |
| 8.0 | 2026-03-10 | 2580<sub>(+new) | 2807<sub>(+new) | 2935<sub>(+new) |  |
| 6.0 | 2026-03-10 |  |  |  |  |
| 5.0 | 2025-10-30 | 2475<sub>(+new) | 2780<sub>(+new) | 2850<sub>(+new) |  |
| 4.41 | 2025-08-15 |  |  |  |  |
| 4.0 | 2025-08-15 |  |  |  |  |
| 3.0 | 2025-08-15 |  |  |  |  |
| 2.0 | 2025-08-15 |  |  |  |  |
| 1.0 | 2025-08-15 |  |  |  |  |
| 0.99 | 2025-02-09 |  |  |  |  |
| 0.69 | 2024-11-06 |  |  |  |  |
| 0.50 | 2024-10-15 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+4kc+<version>&body=###%20Engine%20name%0A4kc%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:22:03

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2475, 2580, 2537]
  line "STC (8.0+0.08s)" [2475, 2580, 2537]
  line "LTC (60.0+0.60s)" [2780, 2807, 2854]
  line "VLTC (2m24s+1.12s)" [2850, 2935, 2954]
  line "VLTC (2m24s+1.12s)" [2850, 2935, 2954]
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
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2475, 2580, 2537]
  line "STC (8.0+0.08s)" [2475, 2580, 2537]
  line "LTC (60.0+0.60s)" [2780, 2807, 2854]
  line "VLTC (2m24s+1.12s)" [2850, 2935, 2954]
  line "VLTC (2m24s+1.12s)" [2850, 2935, 2954]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2954 | 32 | 302 | 49% | 2965 | 41% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2854 | 32 | 300 | 52% | 2835 | 42% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2537 | 29 | 376 | 52% | 2515 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2935 | 28 | 402 | 52% | 2913 | 39% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 29 | 374 | 51% | 2797 | 40% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2580 | 27 | 456 | 50% | 2573 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2850 | 32 | 296 | 49% | 2862 | 39% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 31 | 324 | 48% | 2795 | 37% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2475 | 30 | 396 | 51% | 2469 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |